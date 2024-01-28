"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  return (
    <Button
      onClick={() => signOut()}
      className="text-rose-500 bg-inherit hover:bg-inherit"
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
