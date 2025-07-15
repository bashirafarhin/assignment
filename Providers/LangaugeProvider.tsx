"use client";

import "@/lib/i18n/client";
import { ReactNode } from "react";

export default function LangaugeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}