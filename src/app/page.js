'use client'
import React from "react";
import { DarkModeProvider } from "@/app/components/context/DarkModeContext";
import Main from "./components/Main";

export default function Home() {
  return (
    <DarkModeProvider>
      <Main />
    </DarkModeProvider>
  );
}

