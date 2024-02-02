import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drum Machine",
  description: "Play some music with this drum machine!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
