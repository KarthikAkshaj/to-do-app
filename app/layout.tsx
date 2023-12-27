import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import GlobalStyleProvider from "./Providers/GlobalStyleProvider";
import ContextProvider from "./Providers/ContextProvider";
import { ClerkProvider, auth } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import { dark } from '@clerk/themes';

const nunito_sans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={nunito_sans.className}>
          <NextTopLoader
            height={4}
            color="#118ab2"
            easing="cubic-bezier(0.53,0.21,0,1)"
          />
          <ContextProvider>
            <GlobalStyleProvider>
              {userId && <Sidebar />}
              <div className="w-full">{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
