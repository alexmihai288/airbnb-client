"use client";

import LoginModal from "../modals/loginModal/LoginModal";
import RegisterModal from "../modals/regiserModal/RegisterModal";
import CreatePostModal from "../modals/createPostModal/CreatePostModal";
import { useEffect, useState } from "react";
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
      <CreatePostModal />
    </>
  );
};
