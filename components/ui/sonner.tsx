"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-green-500 group-[.toaster]:text-white group-[.toaster]:border-green-600 group-[.toaster]:shadow-md rounded-lg px-3 py-2 text-sm font-normal",
          description: "group-[.toast]:text-white/90 text-xs",
          actionButton: "group-[.toast]:bg-white group-[.toast]:text-green-600",
          cancelButton: "group-[.toast]:bg-white/20 group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
