"use client";

import { useEffect, useState } from "react";
import LoginModal from "../modals/loginModal/LoginModal";
import RegisterModal from "../modals/regiserModal/RegisterModal";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};
