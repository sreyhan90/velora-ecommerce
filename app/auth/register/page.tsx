"use client";

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

const RegisterPage = () => {
  return (
    <div className="h-screen bg-white flex justify-center px-6 pt-5">
      <div className="w-full max-w-2xl ">
        <Link href="/" className="inline-block">
          <h1 className={`${pacifico.className} text-4xl text-black`}>
            Velora
          </h1>
        </Link>

        <div className="mt-3">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Create your account
          </h2>
        </div>

        <FieldSet className="mt-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <FieldGroup className="grid grid-cols-2 gap-5">
            {/* Full Name */}
            <Field>
              <FieldLabel className="text-sm font-medium text-black">
                Full Name
              </FieldLabel>
              <Input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 h-11 rounded-xl"
              />
            </Field>
            <Field>
              <FieldLabel className="text-sm font-medium text-black">
                Username
              </FieldLabel>
              <Input
                type="text"
                placeholder="Choose a username"
                className="mt-2 h-11 rounded-xl"
              />
            </Field>

            <Field>
              <FieldLabel className="text-sm font-medium text-black">
                Email
              </FieldLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-2 h-11 rounded-xl"
              />
            </Field>
            <Field>
              <FieldLabel className="text-sm font-medium text-black">
                Email Confirm
              </FieldLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-2 h-11 rounded-xl"
              />
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel className="text-sm font-medium text-black">
                Password
              </FieldLabel>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-2 h-11 rounded-xl"
              />
            </Field>

            {/* Confirm Password */}
            <Field >
              <FieldLabel className="text-sm font-medium text-black">
                Confirm Password
              </FieldLabel>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-2 h-11 rounded-xl"
              />
            </Field>

            {/* Button */}
            <Button className="col-span-2 mt-2 h-11 w-full rounded-xl bg-black text-white hover:bg-gray-800">
              Create Account
            </Button>
          </FieldGroup>
        </FieldSet>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-black hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
