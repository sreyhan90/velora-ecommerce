"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CartPage = () => {
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-xl rounded-2xl border p-10 text-center">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Add some products before continuing.
          </p>
          <Link href="/" className="mt-6 inline-block">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const shipping = 20;
  const tax = Math.round(totalPrice * 0.1);
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Review your products and complete your order.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* LEFT - PRODUCTS */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border bg-white p-5">
            <h2 className="mb-5 text-xl font-semibold">Cart Items</h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row"
                >
                  <div className="relative h-28 w-full overflow-hidden rounded-xl border sm:w-28">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Unit price: ${item.price}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </Button>

                        <span className="min-w-6 text-center font-medium">
                          {item.quantity}
                        </span>

                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </Button>
                      </div>

                      <p className="text-base font-bold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - SUMMARY / PAYMENT */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">Order Summary</h2>

            <div className="space-y-4">
              <Input placeholder="Full name" />
              <Input placeholder="Phone number" />
              <Input placeholder="Address" />
              <Input placeholder="City" />
            </div>

            <div className="my-6 h-px bg-border" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax}</span>
              </div>

              <div className="flex items-center justify-between border-t pt-3 text-base font-bold">
                <span>Total</span>
                <span>${grandTotal}</span>
              </div>
            </div>

            <Button className="mt-6 h-11 w-full rounded-xl">
              Complete Order
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Secure checkout powered by Velora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
