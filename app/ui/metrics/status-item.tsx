import { ApplicationProp } from "@/app/lib/definitions";
import clsx from "clsx";

interface StatusItemProps {
  label: string;
  applications: ApplicationProp[];
}

const StatusItem: React.FC<StatusItemProps> = ({ label, applications }) => {
  return (
    <div className="flex flex-row-reverse md:flex-col items-center md:gap-1 md:border-b-2 md:border-gray-200 md:w-full">
      <p className="text-sm md:text-base px-3 italic font-semibold capitalize">
        {label}
      </p>
      <span
        className={clsx(
          "font-bold rounded-full px-4 mx-2 py-1 text-center max-w-fit md:mb-2",
          {
            "bg-gray-200  border-2 border-gray-600": label === "APPLIED",
            "bg-rose-400 border-2 border-rose-600": label === "REJECTED",
            "bg-yellow-400 border-2 border-yellow-600":
              label === "INTERVIEWING",
            "bg-emerald-400 border-2 border-emerald-600": label === "OFFER",
          }
        )}
      >
        {applications.filter((app) => app.status === label).length}
      </span>
    </div>
  );
};

export default StatusItem;
