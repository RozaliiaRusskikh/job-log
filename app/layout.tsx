import type { Metadata } from "next";
import "./ui/globals.css";
import { nunito_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "JobLogs | %s",
    default: "JobLogs | Track Job Applications",
  },
  description:
    "Stay on top of your job search by monitoring applications on our platform",
  keywords: [
    "Job",
    "Applications",
    "Search",
    "Spreadsheet",
    "Track",
    "AI",
    "Metrics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
