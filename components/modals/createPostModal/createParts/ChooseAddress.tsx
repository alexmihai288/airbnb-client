"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChooseAddressSchema, ChooseAddressSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ChooseAdressProps {
  setCountry: Dispatch<SetStateAction<string>>;
  country: string;
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
  setStreetAddress: Dispatch<SetStateAction<string>>;
  streetAddress: string;
  setPostalCode: Dispatch<SetStateAction<string>>;
  postalCode: string;
}

const ChooseAddress: FC<ChooseAdressProps> = ({
  setCountry,
  country,
  setCity,
  city,
  setStreetAddress,
  streetAddress,
  setPostalCode,
  postalCode,
}) => {
  const form = useForm<ChooseAddressSchemaType>({
    resolver: zodResolver(ChooseAddressSchema),
    defaultValues: {
      country: country,
      city: city,
      streetAddress: streetAddress,
      postalCode: postalCode || "",
    },
  });

  const onSubmit = (values: ChooseAddressSchemaType) => {
    toast.success("Informations saved !");
    setCountry(values.country);
    setCity(values.city);
    setStreetAddress(values.streetAddress);
    setPostalCode(values.postalCode);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ex: Country - Denmark" {...field} />
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
