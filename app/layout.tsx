import type { Metadata } from "next";
import "./ui/globals.css";
import { nunito_sans } from "./ui/fonts";
import AuthContext from "./context/AuthContext";

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
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${nunito_sans.className} antialiased`}>
          {children}
        </body>
      </AuthContext>
    </html>
  );
}
