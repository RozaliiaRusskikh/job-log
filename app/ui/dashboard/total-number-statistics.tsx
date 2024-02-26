import { ApplicationProp } from "@/app/lib/definitions";
import clsx from "clsx";

interface TotalNumberStatisticsProps {
  applications: ApplicationProp[];
  type: string;
}

const TotalNumberStatistics: React.FC<TotalNumberStatisticsProps> = ({
  applications,
  type,
}) => {
  return (
    <div className="flex flex-col text-sm md:text-base">
      <div className="mt-1 mb-4 self-center border p-3 border-slate-300 rounded-md leading-7">
        <p className="font-semibold">Total number of {type} applications:</p>
        <p
          className={clsx(
            "font-bold rounded-full px-4 py-1 mx-auto text-center max-w-fit",
            {
              "bg-emerald-400": type === "active",
              "bg-rose-400": type === "rejected",
            }
          )}
        >
          {applications?.length}
        </p>
      </div>
    </div>
  );
};
export default TotalNumberStatistics;
