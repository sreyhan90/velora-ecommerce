import React from "react";

interface olletionsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ColletionsDetailPage({
  params,
}: olletionsDetailPageProps) {
  const { slug } = await params;

  return <div>{slug}</div>;
}
