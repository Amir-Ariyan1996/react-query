import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
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
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
