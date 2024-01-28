"use client";
import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Separator } from "../../ui/separator";
import RegisterForm from "./RegisterForm";
import { useModal } from "@/hooks/use-modal";

interface LoginModalProps {}

const RegisterModal: FC<LoginModalProps> = () => {
  const { isOpen, type, onClose } = useModal();

  const isModalOpen = isOpen && type === "register";
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center py-2.5">
            Create your account
          </DialogTitle>
          <Separator />
        </DialogHeader>
        <h1 className="font-bold text-2xl">Glad to see you !</h1>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
