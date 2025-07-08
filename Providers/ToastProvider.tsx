"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default ToastProvider;