import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Providers from "@/components/Providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers session={session}>{children}</Providers>      
        </body>
    </html>
  );
}
