import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const metadata: Metadata = {
  title: "React Query Training App",
  description: "with purpose of learning react query",
};

const client = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <QueryClientProvider client={client}> */}
        {children}
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
