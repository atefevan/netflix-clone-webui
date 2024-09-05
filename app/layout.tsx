import type { Metadata } from "next";
import { Inter,Nerko_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const nerko_on_init = Nerko_One({
  subsets:['latin'],
  display:'swap',
  variable:'--font-nerko_one',
  weight:'400'
});


export const metadata: Metadata = {
  title: "Netflis",
  description: "Inspired by netflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nerko_on_init.variable}`}>{children}</body>
    </html>
  );
}
