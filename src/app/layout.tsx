import type { Metadata } from "next";
import "./globals.css";
import { BASE_PATH } from "@/lib/base-path";
import { PRELOAD_IMAGES } from "@/lib/preload-images";

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
      <head>
        {PRELOAD_IMAGES.map((image) => (
          <link key={image} rel="preload" as="image" href={`${BASE_PATH}${image}`} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
