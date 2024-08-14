"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(4, { message: "Name is required" }),
  email: z
    .string()
    .min(4, { message: "Email is required" })
    .email({ message: "Please enter valid email address" }),
  password: z.string().min(4, { message: "Password is required" }),
  confirmPassword: z.string().min(4, { message: "Confirm is required" }),
});

const RegisterFrom = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/");
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Register your account with your credential
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                      placeholder="Enter Name "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                      placeholder="Enter Email "
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
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="confirmPassword"
                      className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full dark:bg-slate-800 dark:text-white"
            >
              Sign up
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterFrom;
