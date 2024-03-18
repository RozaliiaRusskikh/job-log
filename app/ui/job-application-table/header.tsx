"use client";

import JobLogsLogo from "../job-logs-logo";
import Menu from "./menu";
import Image from "next/image";
import profile from "@/public/profile.svg";
import { useState } from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { ChatButton } from "../ai-chat-box/chat-button";

const Header = () => {
  const [isMenuOpened, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  function toggleProfileInfo() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="flex flex-row h-32 shrink-0 justify-between rounded-lg bg-primary p-4 md:h-44 shadow-md">
      <div className="flex flex-col justify-between">
        <JobLogsLogo className="pl-1" />
        <Menu />
      </div>
      {session && (
        <div className="relative self-center flex gap-2 md:gap-10">
          <ChatButton />
          <Image
            onClick={toggleProfileInfo}
            src={session?.user ? session?.user.image : profile}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full cursor-pointer hover:scale-110 transition-transform w-[35px] h-[35px] md:w-[55px] md:h-[55px]"
          />
          {isMenuOpened && (
            <div className="bg-slate-100 rounded-md p-1 absolute left-2/3 md:left-1/2 md:bottom-[-55%] bottom-[-95%] md:min-w-[110px] text-center opacity-85">
              <button
                onClick={async () => {
                  await signOut({ callbackUrl: "/" });
                }}
                type="button"
                className="font-bold cursor-pointer text-sm md:text-base hover:text-emerald-700 transition-colors"
              >
                <ArrowLeftEndOnRectangleIcon className="w-[16px] h-[16px] inline mr-1" />
                <span className="hidden md:inline">Sign Out</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
