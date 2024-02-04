"use client";
import { FC, useEffect, useState } from "react";
import { QueryProvider } from "./QueryProvider";
import { ModalProvider } from "./ModalProvider";
import { Toaster } from "../ui/sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <QueryProvider>
        {children}
        <ModalProvider />
        <Toaster />
      </QueryProvider>
    </>
  );
};

export default Providers;
