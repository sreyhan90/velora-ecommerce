import { ProductType } from "@/app/constants";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/app/context/cart-context";
import { useFavorites } from "@/app/context/favorites-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductModail from "./ProductModail";

interface ProductItemPorps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemPorps) => {
  const { addToCart } = useCart();

  const { toggleFavorite, isFavorite } = useFavorites();

  const fav = isFavorite(product.id);

  return (
    <div>
     
      <Card>
        <CardHeader>
          <div className="flex flex-row justify-between">
            <CardTitle>{product.title}</CardTitle>
            <div className="flex items-center gap-1 text-sm">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span>{product.rating}</span>
              <span className="text-gray-500">({product.reviews})</span>
            </div>
          </div>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Image
              alt={product.description}
              width={500}
              height={500}
              className="w-full h-56 object-cover mb-4 rounded-xl"
              src={product.image}
            />

            {/* Heart icon */}
            <button
              onClick={() =>
                toggleFavorite({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  description: product.description,
                })
              }
              className="absolute top-3 left-62 flex items-center justify-center w-9 h-9 bg-white rounded-full shadow hover:scale-110 transition"
            >
              <Heart
                size={18}
                className={fav ? "text-red-500 fill-red-500" : "text-gray-600"}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span>${product.price}</span>
            <span className="line-through">${product.mrp}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <ProductModail product={product} />
          <Button
            variant="default"
            onClick={() => {
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
              });
              toast.success("Product added successfully.", {
                position: "top-right",
              });
            }}
          >
            Add to card
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductItem;
