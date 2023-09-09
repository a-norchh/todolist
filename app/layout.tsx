import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple TodoApp",
  description: "simple todo app for learning Next js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
