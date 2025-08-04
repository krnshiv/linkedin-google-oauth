// src/app/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import {
  PATH_LOGIN,
  WELCOME_PREFIX,
  HOME_MAIN_STYLE,
} from "@/utils/constants";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(PATH_LOGIN);
  }

  return (
    <main style={HOME_MAIN_STYLE}>
      <h1>{WELCOME_PREFIX}{session.user.name}</h1>
    </main>
  );
}
