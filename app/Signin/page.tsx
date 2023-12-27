"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <>
      <div className="signin flex items-center justify-center h-full">
        <SignIn />
      </div>
    </>
  );
}

export default page;
