"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import type { Session } from "next-auth";
import { theme } from "@/styles/theme";

interface ProvidersProps {
  session: Session | null;
  children: React.ReactNode;
}

export default function Providers({ session, children }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
