"use client";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <div
      onClick={() =>
        signIn("google", { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT })
      }
    >
      login
    </div>
  );
};

export default LoginForm;
