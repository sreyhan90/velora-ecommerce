import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <section className="relative h-[320px] w-full overflow-hidden md:h-[420px]">
        <Image
          src="/about/about-banner.jpg"
          alt="Velora about banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl text-white">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/80">
              About Velora
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Crafted for comfort, styled for everyday life
            </h1>
            <p className="mt-4 text-sm text-white/85 md:text-base">
              Velora brings together modern footwear design, premium materials,
              and timeless style for people who value both comfort and
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Our Story
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              We design footwear that feels as good as it looks
            </h2>
          </div>

          <div className="space-y-5 text-gray-600 dark:text-gray-400">
            <p>
              Velora was created with a simple idea: everyday shoes should never
              force you to choose between style and comfort. We believe footwear
              should support your daily rhythm while still expressing your
              personal style.
            </p>
            <p>
              From minimalist sneakers to modern lifestyle silhouettes, our
              collections are inspired by urban movement, timeless design, and
              the desire to create pieces you can wear again and again.
            </p>
            <p>
              Every step of our design process focuses on quality, versatility,
              and a clean visual identity that fits modern wardrobes.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Our Values
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              What defines Velora
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold">Comfort First</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                We focus on soft support, flexible movement, and everyday
                wearability so your shoes feel natural from morning to night.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold">Modern Design</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Clean lines, versatile colors, and timeless shapes help our
                products fit effortlessly into a modern lifestyle.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold">Quality Materials</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                We choose materials that balance durability, comfort, and visual
                appeal to deliver a better long-term experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[320px] overflow-hidden rounded-2xl md:h-[420px]">
            <Image
              src="/about/about-story.jpg"
              alt="Velora footwear collection"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Our Mission
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              To create everyday footwear that elevates every step
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
              We want Velora to be part of your daily life — from busy city days
              to relaxed weekends. Our mission is to offer footwear that feels
              premium, looks refined, and supports your lifestyle without
              effort.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
              We are committed to building collections that are wearable,
              dependable, and easy to style across seasons.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t dark:border-white/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Discover Velora
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Step into your next favorite pair
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Explore our latest collection and find footwear designed for
            comfort, confidence, and everyday style.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/shop/new">
              <Button className="h-11 rounded-xl px-8">
                Shop New Arrivals
              </Button>
            </Link>
            <Link href="/shop/best-sellers">
              <Button variant="outline" className="h-11 rounded-xl px-8">
                Best Sellers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
