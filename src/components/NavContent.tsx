"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Avatar, Box, Skeleton } from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { AVATAR_SX, LOADING_TEXT, NAV_BOX_SX } from "@/utils/constants";

export const NavContent = () => {
  const { data: session, status } = useSession();

  if (status === LOADING_TEXT) {
    return (
      <Box sx={NAV_BOX_SX}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={80} height={32} />
      </Box>
    );
  }

  return session ? (
    <Box sx={NAV_BOX_SX}>
      <Avatar src={session.user.image!} sx={AVATAR_SX}/>
      <LogoutButton />
    </Box>
  ) : (
    <LoginButton />
  );
}
