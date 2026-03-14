import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Star } from "lucide-react";
import { ProductType } from "@/app/constants";
import { useCart } from "@/app/context/cart-context";
import { useFavorites } from "@/app/context/favorites-context";

interface ProductModailProps {
  product: ProductType;
}

const ProductModail = ({ product }: ProductModailProps) => {
  const [quantitiy, setQuantitiy] = useState(1);
  const handleInc = () => {
    setQuantitiy(quantitiy + 1);
  };
  const handleDec = () => {
    if (quantitiy > 1) {
      setQuantitiy(quantitiy - 1);
    }
  };
  const { addToCart } = useCart();

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Detail</Button>
        </DialogTrigger>

        <DialogContent className="w-full max-w-5xl p-0 overflow-hidden rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT - IMAGE */}
            <div className="bg-muted/30 p-4 md:p-6">
              <div className="overflow-hidden rounded-2xl bg-white">
                <Image
                  alt={product.description}
                  width={700}
                  height={700}
                  src={product.image}
                  className="h-350px md:h-500px w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* small info badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border px-3 py-1 text-xs font-medium">
                  Premium Quality
                </span>
                <span className="rounded-full border px-3 py-1 text-xs font-medium">
                  Free Shipping
                </span>
                <span className="rounded-full border px-3 py-1 text-xs font-medium">
                  30-Day Return
                </span>
              </div>
            </div>

            {/* RIGHT - DETAILS */}
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                {/* title + rating */}
                <div className="border-b pb-4">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {product.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Modern design, premium comfort, and everyday
                        versatility.
                      </p>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-muted px-3 py-2 text-sm">
                      <Star
                        size={16}
                        className="fill-yellow-500 text-yellow-500"
                      />
                      <span className="font-medium">{product.rating}</span>
                      <span className="text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* price */}
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.mrp}
                    </span>
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                      Save ${product.mrp - product.price}
                    </span>
                  </div>
                </div>

                {/* description */}
                <div className="py-5 border-b">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Description
                  </h3>
                  <p className="leading-7 text-sm md:text-base text-muted-foreground">
                    {product.description} Crafted for all-day comfort, this
                    model is perfect for casual outfits, weekend wear, and
                    everyday movement. Its clean silhouette and durable finish
                    make it a versatile choice for any modern wardrobe.
                  </p>
                </div>

                {/* quantity */}
                <div className="py-5 border-b">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Quantity
                  </h3>

                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handleDec}
                      className="rounded-full"
                    >
                      -
                    </Button>

                    <div className="flex h-10 min-w-56px items-center justify-center rounded-xl border px-4 text-base font-semibold">
                      {quantitiy}
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handleInc}
                      className="rounded-full"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* extra info */}
                <div className="py-5 space-y-2 text-sm text-muted-foreground">
                  <p>• Estimated delivery: 2–4 business days</p>
                  <p>• Free returns within 30 days</p>
                  <p>• Available in limited stock</p>
                </div>
              </div>

              {/* actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="flex-1 h-11 rounded-xl"
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
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModail;
