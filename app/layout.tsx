import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/provider";
export const metadata: Metadata = {
  title: "React Query Training App",
  description: "purpose of learning react query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
