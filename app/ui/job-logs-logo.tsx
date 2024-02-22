import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { roboto } from "@/app/ui/fonts";

export default function JobLogsLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center text-white `}
    >
      <MagnifyingGlassIcon className="h-10 w-10 mr-1 rotate-[5deg] text-emerald-500" />
      <p className="text-[37px] md:text-[50px]">JobLogs</p>
    </div>
  );
}
