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
      <div className="mt-1 mb-4 self-center border sm:p-3 p-2 border-slate-300 rounded-md leading-7">
        <p className="font-semibold text-center leaading-7 sm:leading-normal">
          Total number of {type} applications:
        </p>
        <p
          className={clsx(
            "font-bold rounded-full px-4 py-1 mx-auto text-center max-w-fit",
            {
              "border border-gray-400": type === "active",
              "bg-gray-300": type === "rejected",
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
