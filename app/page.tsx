"use client";

import Image from "next/image";
import JobLogsLogo from "./ui/job-logs-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import googleIcon from "@/public/icons-google.svg";
import Loading from "./ui/job-application-table/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/job-applications");
    }
  }, [session?.status, router]);

  function socialAction(action: string) {
    setIsLoading(true);

    signIn("google", { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          return;
        }

        if (callback?.ok) {
          router.push("/job-applications");
        }
      })
      .finally(() => setIsLoading(false));
  }

  if (session?.status === "loading") {
    <div className="mb-2 flex items-center justify-center h-screen bg-gray-100">
      <Loading />;
    </div>;
  }

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-primary p-4 md:h-40">
        <JobLogsLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-2 md:gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-3/5 md:px-16">
          <h1 className={`text-xl text-primary md:text-3xl md:leading-normal`}>
            <strong>Welcome to JobLogs</strong> - the simple way to stay on top
            of your job applications, manage them without the need of
            spreadsheets, and gain valuable insights into your job search
          </h1>
          <button
            onClick={() => socialAction("google")}
            disabled={isLoading}
            className="font-bold flex items-center gap-5 self-start rounded-lg bg-emerald-400 px-6 py-3 text-sm text-white transition-colors hover:bg-emerald-500 md:text-base border-2 border-emerald-500"
          >
            <span>
              Log in with
              <Image
                src={googleIcon}
                className="w-[23px] h-[23px] inline ml-2"
                alt="google icon"
              />
            </span>
            <ArrowRightIcon className="w-5 md:w-6 animate-pulse" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-6 md:min-w-3/5 md:px-28 pb-12 md:py-12">
          <hr className="w-4/5 h-0.5 my-3.5 bg-emerald-200 border-0 self-end hidden md:block" />
          <hr className="w-3/4 h-0.5 my-3.5 bg-emerald-200 border-0 self-end hidden md:block" />
          <hr className="w-1/2 h-0.5 my-3.5 bg-emerald-200 border-0 self-end hidden md:block" />
          <Image
            src="/hero-desktop.webp"
            width={900}
            height={760}
            className="hidden md:block py-3.5"
            alt="Desktop Hero"
            priority
          />
          <Image
            src="/hero-mobile.png"
            width={460}
            height={420}
            className="block md:hidden"
            alt="Mobile Hero"
          />
          <hr className="w-1/2 h-0.5 my-3.5 bg-emerald-200 border-0 self-start hidden md:block" />
          <hr className="w-3/4 h-0.5 my-3.5 bg-emerald-200 border-0 self-start hidden md:block" />
          <hr className="w-4/5 h-0.5 my-3.5 bg-emerald-200 border-0 self-start hidden md:block" />
        </div>
      </div>
    </main>
  );
}
