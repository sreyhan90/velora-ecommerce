"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/app/context/favorites-context";
import { useCart } from "@/app/context/cart-context";
import { ProductType } from "@/app/constants";
import { toast } from "sonner";

interface ProductFavaProps {
  product: ProductType;
}

const FavoritePage = ({ product }: ProductFavaProps) => {
  const { favoriteItems, removeFromFavorites, clearFavorites } = useFavorites();
  const { addToCart } = useCart();
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your saved products in one place.
          </p>
        </div>

        {favoriteItems.length > 0 && (
          <Button variant="outline" onClick={clearFavorites}>
            Clear Favorites
          </Button>
        )}
      </div>

      {favoriteItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border py-20 text-center">
          <Heart className="mb-4 h-10 w-10 text-gray-400" />
          <h2 className="text-xl font-semibold">No favorites yet</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Start adding products you love.
          </p>
          <Link href="/" className="mt-6">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <button onClick={() => removeFromFavorites(item.id)}>
                    <Trash2 className="h-4 w-4 text-muted-foreground hover:text-red-500" />
                  </button>
                </div>

                <p className="mt-3 text-lg font-bold">${item.price}</p>

                <Button
                  className="mt-4 w-full rounded-xl"
                  onClick={() => {
                    addToCart({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                    });
                    removeFromFavorites(item.id);
                    toast.success("Product added successfully.", {
                      position: "top-right",
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
