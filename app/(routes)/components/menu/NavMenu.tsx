"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const shopLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Men",
    href: "/shop/men",
    description: "T-shirts, shirts, jackets, jeans, and everyday essentials.",
  },
  {
    title: "Women",
    href: "/shop/women",
    description: "Dresses, tops, skirts, outerwear, and trend pieces.",
  },
  {
    title: "New Arrivals",
    href: "/shop/new",
    description: "Fresh drops added weekly — discover what’s new.",
  },
  {
    title: "Best Sellers",
    href: "/shop/best-sellers",
    description: "Customer favorites — most-loved styles and essentials.",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    description: "Bags, belts, hats, sunglasses, and finishing touches.",
  },
  {
    title: "Sale",
    href: "/shop/sale",
    description: "Limited-time deals — grab your favorites for less.",
  },
];

const collectionsLinks: { title: string; href: string; description: string }[] =
  [
    {
      title: "Spring / Summer",
      href: "/collections/spring-summer",
      description: "Light layers, breathable fabrics, and seasonal colors.",
    },
    {
      title: "Essentials",
      href: "/collections/essentials",
      description: "Minimal basics you can wear every day.",
    },
    {
      title: "Streetwear",
      href: "/collections/streetwear",
      description: "Relaxed fits, bold prints, and urban style.",
    },
    {
      title: "Capsule Wardrobe",
      href: "/collections/capsule",
      description: "Mix-and-match pieces for a clean, timeless look.",
    },
  ];

export function NavMenu() {
  const pathname = usePathname();

  return (
    <div className=" bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {/* SHOP */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-2 p-3 md:w-130 md:grid-cols-2 lg:w-200">
                  {shopLinks.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      pathname={pathname}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* COLLECTIONS */}
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-2 p-3 md:w-130 md:grid-cols-2 lg:w-200">
                  {collectionsLinks.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      pathname={pathname}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Links */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/track-order">Track Order</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/support">Support</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  pathname,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  pathname: string;
}) {
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <li {...props}>
      <NavigationMenuLink
        asChild
        className={[
          "block rounded-md p-3 transition hover:bg-muted/60 focus:outline-none",
          isActive
            ? "text-foreground font-semibold border-b-2 border-foreground"
            : "text-muted-foreground border-b-2 border-transparent",
        ].join(" ")}
      >
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default NavMenu;
