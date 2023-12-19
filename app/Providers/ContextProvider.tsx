"use client";

import React from "react";
import { GlobalProvider } from "../context/globalContextProvider";

interface Props {
  children: React.ReactNode;
}
function ContextProvider({ children }: Props) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }
  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;
