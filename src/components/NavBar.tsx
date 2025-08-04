"use client";

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavContent } from "./NavContent";
import {
  APPBAR_POSITION,      
  TYPOGRAPHY_VARIANT,
  TYPOGRAPHY_SX,
  TITLE,
} from "@/utils/constants";

export default function NavBar() {
  return (
      <AppBar position={APPBAR_POSITION}>
        <Toolbar>
          <Typography variant={TYPOGRAPHY_VARIANT} sx={TYPOGRAPHY_SX}>
            {TITLE}
          </Typography>
          <NavContent />
        </Toolbar>
      </AppBar>
  );
}
