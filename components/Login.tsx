"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { signIn, useSession } from "next-auth/react";
import Avatar from "./Avatar";

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Avatar />
      ) : (
        <Button onClick={() => signIn("google")}>Sign in</Button>
      )}
    </>
  );
};

export default Login;
