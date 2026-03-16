"use client";

import Hero from "../components/Hero";
import ProductList from "../components/product/ProductList";
import { Suspense } from "react";

function ProductListFallback() {
  return <div>Ürünler yükleniyor...</div>;
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<ProductListFallback />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
