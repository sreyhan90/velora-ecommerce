"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PackageCheck,
  Truck,
  MapPin,
  CheckCircle2,
  Search,
} from "lucide-react";

const TrackOrderPage = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <section className="border-b bg-gray-50 dark:border-white/10 dark:bg-zinc-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Track Order
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Check your order status
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Enter your order number and email address to see the latest delivery
            updates.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 rounded-2xl border bg-white p-4 shadow-sm dark:border-white/10 dark:bg-zinc-950 md:grid-cols-[1fr,1fr,auto]">
            <Input placeholder="Order number" className="h-11 rounded-xl" />
            <Input placeholder="Email address" className="h-11 rounded-xl" />
            <Button className="h-11 rounded-xl px-6">
              <Search className="mr-2 h-4 w-4" />
              Track
            </Button>
          </div>
        </div>
      </section>

      {/* Example status */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <div className="flex flex-col gap-3 border-b pb-5 dark:border-white/10 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Order Number
                  </p>
                  <h2 className="text-2xl font-semibold">#VLR-20481</h2>
                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-500/15 dark:text-green-400">
                  In Transit
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border p-4 dark:border-white/10">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Estimated Delivery
                  </p>
                  <p className="mt-2 font-semibold">March 14, 2026</p>
                </div>

                <div className="rounded-xl border p-4 dark:border-white/10">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Shipping Method
                  </p>
                  <p className="mt-2 font-semibold">Express Delivery</p>
                </div>

                <div className="rounded-xl border p-4 dark:border-white/10">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Destination
                  </p>
                  <p className="mt-2 font-semibold">Izmir, Türkiye</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-8">
                <h3 className="mb-6 text-xl font-semibold">
                  Shipment Progress
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="mt-2 h-full w-px bg-gray-200 dark:bg-white/10" />
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold">Order Confirmed</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Your order has been successfully placed and confirmed.
                      </p>
                      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                        March 11, 2026 - 09:15
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400">
                        <PackageCheck className="h-5 w-5" />
                      </div>
                      <div className="mt-2 h-full w-px bg-gray-200 dark:bg-white/10" />
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold">Packed and Ready</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Your items have been packed and prepared for shipment.
                      </p>
                      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                        March 11, 2026 - 14:40
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div className="mt-2 h-full w-px bg-gray-200 dark:bg-white/10" />
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold">In Transit</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Your package is currently on the way to the delivery
                        hub.
                      </p>
                      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                        March 12, 2026 - 08:20
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 dark:bg-white/10 dark:text-gray-500">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-400 dark:text-gray-500">
                        Out for Delivery
                      </h4>
                      <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                        Your package will be delivered soon.
                      </p>
                      <p className="mt-2 text-xs text-gray-300 dark:text-gray-600">
                        Pending
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold">Order Summary</h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b pb-3 dark:border-white/10">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Order Number
                  </span>
                  <span className="font-medium">#VLR-20481</span>
                </div>

                <div className="flex items-center justify-between border-b pb-3 dark:border-white/10">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Items
                  </span>
                  <span className="font-medium">3 Products</span>
                </div>

                <div className="flex items-center justify-between border-b pb-3 dark:border-white/10">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="font-medium">$320</span>
                </div>

                <div className="flex items-center justify-between border-b pb-3 dark:border-white/10">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Shipping
                  </span>
                  <span className="font-medium">$20</span>
                </div>

                <div className="flex items-center justify-between pt-1 text-lg font-semibold">
                  <span>Total</span>
                  <span>$340</span>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-gray-50 p-4 dark:bg-white/5">
                <h4 className="font-semibold">Need help?</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  If you have questions about your order, our support team is
                  here to help you.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 w-full rounded-xl dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrderPage;
