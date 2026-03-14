"use client";

import React, { useMemo, useState } from "react";
import { products } from "@/app/constants";
import ProductItem from "./ProductItem";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

type SortOption = "low" | "high" | "rating";

const ProductList = () => {
  const [sortBy, setSortBy] = useState<SortOption>();
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredAndSortedProducts = useMemo(() => {
    let updatedProducts = [...products];

    if (query) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(query),
      );
    }

    if (sortBy === "low") {
      updatedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      updatedProducts.sort((a, b) => b.rating - a.rating);
    }

    return updatedProducts;
  }, [query, sortBy]);

  return (
    <div className="container mx-auto px-5 py-9">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Products</h2>
        {query && (
          <p className="mt-2 text-sm text-muted-foreground">
            Search results for:{" "}
            <span className="font-medium text-black">{query}</span>
          </p>
        )}
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <Button
          variant={sortBy === "low" ? "default" : "outline"}
          onClick={() => setSortBy("low")}
        >
          Price: Low to High
        </Button>

        <Button
          variant={sortBy === "high" ? "default" : "outline"}
          onClick={() => setSortBy("high")}
        >
          Price: High to Low
        </Button>

        <Button
          variant={sortBy === "rating" ? "default" : "outline"}
          onClick={() => setSortBy("rating")}
        >
          Customer Rating
        </Button>
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <div className="rounded-2xl border p-10 text-center">
          <h3 className="text-xl font-semibold">No products found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try searching with a different product name.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAndSortedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
