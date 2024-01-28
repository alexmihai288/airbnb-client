"use client";
import { LoginSchema, LoginSchemaType } from "@/schemas";
import { FC, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { login } from "@/actions/login";
import { FormSucces } from "@/components/FormSuccess";
import { FormError } from "@/components/FormError";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("errror") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [succes, setSucces] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchemaType) => {
    setError("");
    setSucces("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data.error) {
            form.reset();
            setError(data.error);
          }

          if (data.success) {
            form.reset();
            setSucces(data.success);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="john.doe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSucces messaage={succes} />
        <FormError messaage={error} />
        <div className="flex items-center justify-end">
          <div className="flex flex-col">
            <Button
              disabled={isPending}
              type="submit"
              className="bg-primaryRed hover:bg-secondaryRed transition-colors ml-auto"
            >
              Login
            </Button>
            <span className="text-xs underline mt-2">
              Don&apos;t have an account?
            </span>
          </div>
        </div>

        <Separator />
        <Button
          type="button"
          onClick={() =>
            signIn("google", {
              callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
            })
          }
          className="w-full bg-inherit hover:bg-primaryGrey border-2 text-black"
        >
          <FcGoogle className="mr-2 text-xl" />
          Continue with google
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
