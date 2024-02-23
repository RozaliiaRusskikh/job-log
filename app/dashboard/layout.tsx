"use client";

import Header from "@/app/ui/dashboard/header";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col p-6">
      <div className="w-full">
        <Header pathname={pathname} />
      </div>
      <div>{children}</div>
    </div>
  );
}
