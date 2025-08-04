"use client";
import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import {
    LOGOUT_BUTTON_COLOR,
    LOGOUT_BUTTON_CALLBACK_URL,
    LOGOUT_BUTTON_TEXT,
} from "@/utils/constants";


const LogoutButton = () => {
    const handleCLick = useCallback(() => signOut({
        callbackUrl: LOGOUT_BUTTON_CALLBACK_URL,
    }), [])
    return (
        <Button
            color={LOGOUT_BUTTON_COLOR}
            onClick={handleCLick}
        >
            {LOGOUT_BUTTON_TEXT}
        </Button>
    );
}

export default LogoutButton