"use client";
import { Suspense } from "react";
import ProductList from "../components/product/ProductList";

function ProductListFallback() {
  return <div>Ürünler yükleniyor...</div>;
}

const ShopPage = () => {
  return (
    <div>
      {" "}
      <Suspense fallback={<ProductListFallback />}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default ShopPage;
