import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eaves - Pick stocks like the top 0.001%",
  description: "See what top investors, fund managers and politicians are buying and selling. Analyze their portfolios with AI insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
