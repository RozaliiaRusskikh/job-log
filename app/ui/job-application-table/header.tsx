"use client";

import JobLogsLogo from "../job-logs-logo";
import Menu from "./menu";
import Image from "next/image";
import profile from "@/public/profile.svg";
import { useState } from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

//src={session?.user.image} => for profile

const Header = () => {
  const [isMenuOpened, setIsMenuOpen] = useState(false);
  function toggleProfileInfo() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="flex flex-row h-32 shrink-0 justify-between rounded-lg bg-primary p-4 md:h-44 shadow-md">
      <div className="flex flex-col justify-between">
        <JobLogsLogo className="pl-1" />
        <Menu />
      </div>
      <div className="relative self-center">
        <Image
          onClick={toggleProfileInfo}
          src={profile}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer hover:scale-110 transition-transform"
        />
        {isMenuOpened && (
          <div className="bg-slate-100 rounded-md p-2 absolute right-0 min-w-[110px] text-center opacity-80">
            <button className="font-bold cursor-pointer text-sm md:text-base hover:text-emerald-700 transition-colors">
              <ArrowLeftEndOnRectangleIcon className="w-[16px] h-[16px] inline mr-1" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
