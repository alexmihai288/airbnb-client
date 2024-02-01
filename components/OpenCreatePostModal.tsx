"use client";

import { useModal } from "@/hooks/use-modal";
import { FC } from "react";

interface OpenCreatePostModalProps {
  children: React.ReactNode;
}

const OpenCreatePostModal: FC<OpenCreatePostModalProps> = ({ children }) => {
  const { onOpen } = useModal();

  return <div onClick={() => onOpen("createPost")}>{children}</div>;
};

export default OpenCreatePostModal;
