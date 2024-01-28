import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Separator } from "../../ui/separator";
import LoginForm from "./LoginForm";

interface LoginModalProps {
  children: React.ReactNode;
}

const LoginModal: FC<LoginModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full text-left">
        {children}
      </DialogTrigger>
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
