"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChooseAddressSchema, ChooseAddressSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useTransition } from "react";
import { useForm } from "react-hook-form";

interface ChooseAdressProps {}

const ChooseAddress: FC<ChooseAdressProps> = ({}) => {
  const form = useForm<ChooseAddressSchemaType>({
    resolver: zodResolver(ChooseAddressSchema),
    defaultValues: {
      country: "",
      city: "",
      streetAddress: "",
      postalCode: "",
    },
  });

  const onSubmit = (values: ChooseAddressSchemaType) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ex:Country - Denmark" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Street address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="City / municipality / commune" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Postal code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primaryRed hover:bg-secondaryRed transition-colors ml-auto"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default ChooseAddress;
