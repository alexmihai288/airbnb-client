"use client";
import { useModal } from "@/hooks/use-modal";
import { FC } from "react";

interface LoginButtonProps {}

const OpenLoginModal: FC<LoginButtonProps> = ({}) => {
  const { onOpen } = useModal();
  return (
    <p
      onClick={() => onOpen("login")}
      className="hover:bg-primaryGrey p-2.5 text-md font-medium"
    >
      Login
    </p>
  );
};

export default OpenLoginModal;
