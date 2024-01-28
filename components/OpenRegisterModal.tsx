"use client";
import { useModal } from "@/hooks/use-modal";
import { FC } from "react";

interface OpenRegisterModalProps {
  children: React.ReactNode;
}

const OpenRegisterModal: FC<OpenRegisterModalProps> = ({ children }) => {
  const { onOpen } = useModal();

  return <div onClick={() => onOpen("register")}>{children}</div>;
};

export default OpenRegisterModal;
