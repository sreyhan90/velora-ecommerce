"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  MenuIcon,
  Search,
  Heart,
  ShoppingBagIcon,
  UserIcon,
  Sparkles,
  Tag,
} from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] sm:w-360px">
        <SheetHeader>
          <SheetTitle className="text-2xl tracking-wide">Velora</SheetTitle>
        </SheetHeader>

        {/* Search */}
        <div className="relative mt-4">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <Input
            placeholder="Search products..."
            className="pl-10 rounded-full"
          />
        </div>

        {/* Primary nav */}
        <div className="mt-6 grid gap-2 text-sm">
          <NavItem
            href="/shop"
            label="Shop All"
            icon={<Sparkles size={18} />}
          />
          <NavItem href="/shop/men" label="Men" />
          <NavItem href="/shop/women" label="Women" />
          <NavItem href="/shop/new" label="New Arrivals" />
          <NavItem href="/shop/best-sellers" label="Best Sellers" />
          <NavItem href="/shop/accessories" label="Accessories" />
          <NavItem
            href="/shop/sale"
            label="Sale"
            icon={<Tag size={18} />}
            badge="-30%"
          />
        </div>

        <div className="my-6 h-px bg-border" />

        {/* Secondary nav */}
        <div className="grid gap-2 text-sm">
          <NavItem
            href="/account"
            label="My Account"
            icon={<UserIcon size={18} />}
          />
          <NavItem href="/fav" label="FavPage" icon={<Heart size={18} />} />
          <NavItem
            href="/cart"
            label="Cart"
            icon={<ShoppingBagIcon size={18} />}
          />
          <NavItem href="/support" label="Support" />
        </div>

        {/* CTA */}
        <div className="mt-8 grid gap-2">
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link href="/shop/new">Shop New Arrivals</Link>
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

function NavItem({
  href,
  label,
  icon,
  badge,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className="flex items-center justify-between rounded-md px-3 py-2 transition hover:bg-muted"
      >
        <div className="flex items-center gap-2">
          {icon ? <span className="text-muted-foreground">{icon}</span> : null}
          <span className="font-medium">{label}</span>
        </div>

        {badge ? (
          <span className="rounded-full bg-foreground px-2 py-0.5 text-xs text-background">
            {badge}
          </span>
        ) : null}
      </Link>
    </SheetClose>
  );
}

export default MobileMenu;
