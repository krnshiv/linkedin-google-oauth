"use client";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
import {
  LOGIN_BUTTON_VARIANT,
  LOGIN_BUTTON_SIZE,
  LOGIN_BUTTON_SX,
  LOGIN_BUTTON_PROVIDER,
  LOGIN_BUTTON_CALLBACK_URL,
  LOGIN_BUTTON_TEXT,
} from "../utils/constants";
import { useCallback } from "react";

const LoginButton = () =>{
  const handleCLick = useCallback(() =>
    signIn(LOGIN_BUTTON_PROVIDER, {
      callbackUrl: LOGIN_BUTTON_CALLBACK_URL,
    }), [],)
  return (
    <Button
      variant={LOGIN_BUTTON_VARIANT}
      size={LOGIN_BUTTON_SIZE}
      startIcon={<GoogleIcon />}
      sx={LOGIN_BUTTON_SX}
      onClick={handleCLick
      }
    >
      {LOGIN_BUTTON_TEXT}
    </Button>
  );
}

export default LoginButton