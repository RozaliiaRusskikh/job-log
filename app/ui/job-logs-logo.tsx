import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { roboto } from "@/app/ui/fonts";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const JobLogsLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`${roboto.className} flex flex-row items-center text-white ${className}`}
    >
      <MagnifyingGlassIcon className="h-10 w-10 mr-1 rotate-[5deg] text-emerald-500" />
      <p className="text-[37px] md:text-[50px]">JobLogs</p>
    </Link>
  );
};

export default JobLogsLogo;
