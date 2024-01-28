"use client";
import { useModal } from "@/hooks/use-modal";
import { FC } from "react";

interface OpenLoginModalProps {
  children: React.ReactNode;
}

const OpenLoginModal: FC<OpenLoginModalProps> = ({ children }) => {
  const { onOpen } = useModal();

  return <div onClick={() => onOpen("login")}>{children}</div>;
};

export default OpenLoginModal;
