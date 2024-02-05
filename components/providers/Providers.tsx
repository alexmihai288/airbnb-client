"use client";
import { useEffect, useState } from "react";
import { ModalProvider } from "./ModalProvider";
import { Toaster } from "../ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ModalProvider />
        <Toaster />
      </QueryClientProvider>
    </>
  );
};

export default Providers;
