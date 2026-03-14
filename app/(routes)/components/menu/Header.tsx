"use client";

import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingBagIcon, UserIcon, Search } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import CartMenu from "./cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/app/context/favorites-context";
import { motion, AnimatePresence } from "framer-motion";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
const placeholders = [
  "Search sneakers...",
  "Search running shoes...",
  "Search Nike, Adidas...",
];

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const handleSearch = () => {
    if (!query.trim()) {
      router.push("/shop");
      return;
    }

    router.push(`/shop?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const { totalFavorites } = useFavorites();
  return (
    <header className="w-full border-b bg-white dark:bg-black sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <h2 className={`${pacifico.className} text-3xl tracking-wide`}>
              Velora
            </h2>
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex relative md:w-70 lg:w-140 items-center">
          <Search
            onClick={handleSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
            size={18}
          />

          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="pl-10 rounded-full border-gray-300 focus:border-black"
          />

          {!query && (
            <div className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 h-5 w-220 overflow-hidden z-10">
              <div className="relative h-full w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 top-0 whitespace-nowrap text-sm text-black"
                  >
                    {placeholders[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/fav" className="relative">
            <Heart className="cursor-pointer hover:scale-110 transition" />
            {totalFavorites > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {totalFavorites}
              </span>
            )}
          </Link>
          <CartMenu />
          <Link href="/auth/login">
            <UserIcon className="cursor-pointer hover:scale-110 transition" />
          </Link>
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>

      {/* Navigation */}
      <NavMenu />
    </header>
  );
};

export default Header;
