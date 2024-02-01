"use client";
import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Separator } from "../../ui/separator";
import LoginForm from "./LoginForm";
import { useModal } from "@/hooks/use-modal";

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "login";
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center py-2.5">Log in</DialogTitle>
          <Separator />
        </DialogHeader>
        <h1 className="font-bold text-2xl">Welcome back !</h1>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
