import { ApplicationProp } from "@/app/lib/definitions";

const StatusBreakdown: React.FC<{ applications: ApplicationProp[] }> = ({
  applications,
}) => {
  return (
    <div className="flex flex-col border border-slate-300 rounded-md mb-4 text-sm md:text-base">
      <div className="my-1 p-2 border-b border-slate-300">
        <p className=" text-sm md:text-base px-3 italic font-semibold">
          Applied:
          <span className="font-bold rounded-full px-4 mx-2 py-1 text-center max-w-fit bg-gray-200">
            {applications.filter((app) => app.status === "applied").length}
          </span>
        </p>
      </div>
      <div className="my-1 p-2 border-b border-slate-300">
        <p className="text-sm md:text-base px-3 italic font-semibold">
          Interviewing:
          <span className="font-bold rounded-full px-4 py-1 mx-2 text-center max-w-fit bg-yellow-400">
            {applications.filter((app) => app.status === "interviewing").length}
          </span>
        </p>
      </div>
      <div className="my-1 p-2">
        <p className=" text-sm md:text-base px-3 italic font-semibold">
          Offer:
          <span className="font-bold rounded-full px-4 py-1 mx-2 text-center max-w-fit bg-emerald-400">
            {applications.filter((app) => app.status === "offer").length}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StatusBreakdown;
