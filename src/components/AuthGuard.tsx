"use client";

import { REDIRECT_TEXT } from "@/utils/constants";
import { ReactNode } from "react";
import { useRequireAuth } from "../hooks/useRequireAuth";


export default function AuthGuard({ children }: { children: ReactNode }) {
  const isAuth = useRequireAuth();
  if (!isAuth) {
    return <div>{REDIRECT_TEXT}</div>;
  }
  return <>{children}</>;
}
