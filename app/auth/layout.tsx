import React from "react";
import Image from "next/image";
import Header from "../(routes)/components/menu/Header";

interface AutLayoutProps {
  children: React.ReactNode;
}

const AutLayout = ({ children }: AutLayoutProps) => {
  return (
    <div>
      <Header />

      {/* RIGHT SIDE - FORM 3/5 */}
      <div className="flex items-center justify-center px-6 py-1 lg:col-span-3 bg-white">
        <div className=" w-full max-w-4x">{children}</div>
      </div>
    </div>
  );
};

export default AutLayout;
