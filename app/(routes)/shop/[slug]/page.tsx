import React from "react";

interface ShopDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ShopDetailPage({ params }: ShopDetailPageProps) {
  const { slug } = await params;

  return <div>{slug}</div>;
}
