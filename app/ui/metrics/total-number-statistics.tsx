import { ApplicationProp } from "@/app/lib/definitions";

interface TotalNumberStatisticsProps {
  applications: ApplicationProp[];
}

const TotalNumberStatistics: React.FC<TotalNumberStatisticsProps> = ({
  applications,
}) => {
  return (
    <div className="flex flex-col text-sm md:text-base">
      <div className="mt-1 mb-4 self-center border sm:p-3 p-2 border-slate-300 rounded-md leading-7">
        <p className="font-semibold text-center leaading-7 sm:leading-normal italic">
          Total number of job applications:
        </p>
        <p className="font-bold rounded-full px-4 py-1 mx-auto text-center max-w-fit border border-gray-400">
          {applications?.length}
        </p>
      </div>
    </div>
  );
};
export default TotalNumberStatistics;
