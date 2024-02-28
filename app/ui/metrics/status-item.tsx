import { ApplicationProp } from "@/app/lib/definitions";
import clsx from "clsx";

interface StatusItemProps {
  label: string;
  applications: ApplicationProp[];
}

const StatusItem: React.FC<StatusItemProps> = ({ label, applications }) => {
  return (
    <p className="flex flex-row-reverse items-center text-sm md:text-base px-3 italic font-semibold capitalize">
      {label}
      <span
        className={clsx(
          "font-bold rounded-full px-4 mx-2 py-1 text-center max-w-fit",
          {
            "bg-gray-200": label === "applied",
            "bg-rose-400": label === "rejected",
            "bg-yellow-400": label === "interviewing",
            "bg-emerald-400": label === "offer",
          }
        )}
      >
        {
          applications.filter((app) => app.status === label.toLowerCase())
            .length
        }
      </span>
    </p>
  );
};

export default StatusItem;
