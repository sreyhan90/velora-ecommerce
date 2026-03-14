"use client";

import React from "react";
import Header from "./components/menu/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 min-h-screen">{children}</main>

      <Toaster />

      <Footer />
    </div>
  );
};

export default RoutesLayout;
