// src/app/login/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import {
  PATH_HOME,
} from "@/utils/constants";
import LoginPage from "@/components/LoginPage";

export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session) redirect(PATH_HOME);

  return <LoginPage/>
}
