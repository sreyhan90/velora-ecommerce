import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Truck,
  RotateCcw,
} from "lucide-react";

const SupportPage = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <section className="border-b bg-gray-50 dark:border-white/10 dark:bg-zinc-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Support Center
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            How can we help you today?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Find answers to common questions, track your order, or contact our
            support team.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl gap-3">
            <Input
              placeholder="Search for help topics..."
              className="h-11 rounded-xl"
            />
            <Button className="h-11 rounded-xl px-6">Search</Button>
          </div>
        </div>
      </section>

      {/* Quick help cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <Truck className="h-6 w-6" />
            <h2 className="mt-4 text-xl font-semibold">Order Tracking</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Check the status of your shipment and stay updated on delivery
              progress.
            </p>
            <Link
              href="/track-order"
              className="mt-4 inline-block text-sm font-medium hover:underline"
            >
              Track your order
            </Link>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <RotateCcw className="h-6 w-6" />
            <h2 className="mt-4 text-xl font-semibold">Returns & Refunds</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Learn how to return a product, request a refund, or exchange an
              item.
            </p>
            <Link
              href="/returns"
              className="mt-4 inline-block text-sm font-medium hover:underline"
            >
              View return policy
            </Link>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <MessageCircle className="h-6 w-6" />
            <h2 className="mt-4 text-xl font-semibold">Live Assistance</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Get help from our support team for questions about products,
              orders, or payments.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium hover:underline"
            >
              Contact support
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section className="bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2">
          {/* FAQ */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl font-semibold">Common support topics</h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
                <h3 className="font-semibold">How can I track my order?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  You can track your order from the Track Order page using your
                  order number and email address.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
                <h3 className="font-semibold">Can I return a product?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Yes, eligible products can be returned within the return
                  period according to our return policy.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
                <h3 className="font-semibold">How long does shipping take?</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Delivery times vary by location, but most orders arrive within
                  2–5 business days.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
                <h3 className="font-semibold">
                  What payment methods do you accept?
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  We accept major credit cards and other secure payment options
                  available at checkout.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Contact Us
            </p>
            <h2 className="text-3xl font-semibold">We’re here to help</h2>

            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      support@velora.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      +90 555 123 45 67
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Velora Support Office, Izmir, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Input placeholder="Your name" className="h-11 rounded-xl" />
                <Input placeholder="Your email" className="h-11 rounded-xl" />
                <Input placeholder="Order number" className="h-11 rounded-xl" />
                <textarea
                  placeholder="How can we help you?"
                  className="min-h-[140px] w-full rounded-xl border border-input bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring dark:border-white/10 dark:bg-zinc-950 dark:text-white"
                />
                <Button className="h-11 w-full rounded-xl bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Submit Your Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
