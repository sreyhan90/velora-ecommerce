"use client";

import Image from "next/image";
import Link from "next/link";
import { Pacifico } from "next/font/google";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="flex items-center justify-center px-6 py-1 lg:col-span-2">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-block">
            <h1
              className={`${pacifico.className} text-4xl text-black dark:text-white`}
            >
              Velora
            </h1>
          </Link>

          <FieldSet className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <FieldGroup className="space-y-5">
              <Field>
                <FieldLabel
                  htmlFor="username"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  Username
                </FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="mt-2 h-11 rounded-xl border-gray-300 dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-500"
                />
                <FieldDescription className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Use your registered username or email address.
                </FieldDescription>
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel
                    htmlFor="password"
                    className="text-sm font-medium text-black dark:text-white"
                  >
                    Password
                  </FieldLabel>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 h-11 rounded-xl border-gray-300 dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-500"
                />
                <FieldDescription className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>

              <Button className="mt-2 h-11 w-full rounded-xl bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Sign In
              </Button>
            </FieldGroup>
          </FieldSet>

          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-black hover:underline dark:text-white"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
