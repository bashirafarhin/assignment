"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { signIn, useSession } from "next-auth/react";
import Avatar from "./Avatar";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Avatar />
      ) : (
        <Button onClick={() => signIn("google")}>{t("signin")}</Button>
      )}
    </>
  );
};

export default Login;
