"use client";

import { useModal } from "@/hooks/use-modal";
import { FC } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = ({}) => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "login";
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>Da boss</DialogContent>
    </Dialog>
  );
};

export default LoginModal;
