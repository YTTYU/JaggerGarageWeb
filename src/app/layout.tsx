import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jagger Garage P-41",
  description: "Премиальный сайт снегоболотохода P-41 от Jagger Garage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
