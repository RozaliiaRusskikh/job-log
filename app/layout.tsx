import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobLogs | Track job applications",
  description:
    "Stay on top of your job search by monitoring applications on our platform",
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
