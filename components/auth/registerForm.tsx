"use client";
import { registerSchema } from "@/schemas";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/actions/signup";
import { useState, useTransition } from "react";
import FormSubmissionSpinner from "../FormSubmissionSpinner";
const RegisterForm = () => {
  type returnData =
    | {
        error: string;
        success?: undefined;
      }
    | {
        success: string;
        error?: undefined;
      };
  const [message, setMessage] = useState<String>("");
  const [isPending, setTransition] = useTransition();
  const [messageColor,setMessageColor] = useState("text-red-700")
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confrimPassword: "",
    },
  });
  const onsubmit = async (values: z.infer<typeof registerSchema>) => {
    setMessage("");
    if (values.confrimPassword !== values.password) {
      setMessage("Password is not matching");
      return;
    }
    setTransition(() => {
      signup(values).then((data: returnData) => {
        if (data.error) {
          setMessage(data.error);
        } else {
          setMessageColor("text-green-400")
          setMessage("Verfication email is sent!");
        }
      });
    });
  };
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onsubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="ansar@example.com"
                  type="email"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage></FormMessage>
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
                  placeholder="********"
                  type="password"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confrimPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="********"
                  type="password"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <div className={`${messageColor} text-sm`}>{message}</div>
        <Button type="submit" className="w-full" disabled={isPending}>
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
