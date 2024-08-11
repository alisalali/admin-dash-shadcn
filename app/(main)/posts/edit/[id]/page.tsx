"use client";

import React from "react";
import BackButton from "@/components/BackButton";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useToast } from "@/components/ui/use-toast";

import posts from "@/data/posts";

const formSchema = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  body: z.string().min(3, { message: "Body is required" }),
  author: z.string().min(3, { message: "Author is required" }),
  date: z.string().min(3, { message: "Date is required" }),
});

interface PostEditPageProps {
  params: { id: string };
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const { toast } = useToast();

  const post = posts.find((post) => post.id === params.id);
  // 1. Define your form.
  console.log(post);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      author: post?.author || "",
      body: post?.body || "",
      date: post?.date || "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "Post has been updated successfully ",
      description: `Updated by ${post?.author} on ${post?.date}`,
    });
  }

  return (
    <>
      <BackButton text="Back to Post" link="/posts" />
      <h3 className="text-2xl mb-4">Edit Form </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold to-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold to-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                    placeholder="Enter body"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold to-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                    placeholder="Enter author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold to-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100   dark:bg-slate-500 border-0 focus-visible:ring-0  dark:text-white text-black focus-visible:ring-offset-0 "
                    placeholder="Enter date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full dark:bg-slate-800 dark:text-white"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PostEditPage;
