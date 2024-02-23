"use client";

import NavLink from "./navLink";
import { usePathname } from "next/navigation";

export default function Menu() {
  const navMenu = [
    { title: "Active", path: "/dashboard" },
    { title: "Rejected", path: "/dashboard/rejected-job-applications" },
  ];

  const pathname = usePathname();

  return (
    <nav className="pl-2">
      <ul className="flex justify-start gap-14 items-center text-white">
        {navMenu.map((navLink, i) => (
          <NavLink
            key={i}
            title={navLink.title}
            path={navLink.path}
            pathname={pathname}
          />
        ))}
      </ul>
    </nav>
  );
}
