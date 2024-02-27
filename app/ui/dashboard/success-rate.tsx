import { ApplicationProp } from "@/app/lib/definitions";
import { StarIcon } from "@heroicons/react/24/outline";

// Function to calculate success rate
function calculateSuccessRate(applications: ApplicationProp[]): number {
  // Filter applications with status "interviewing"
  const successfulApplications = applications.filter(
    (app) => app.status === "interviewing"
  );

  // Calculate success rate
  const successRate =
    (successfulApplications.length / applications.length) * 100;

  return parseFloat(successRate.toFixed(2));
}

const SuccessRate: React.FC<{ applications: ApplicationProp[] }> = ({
  applications,
}) => {
  return (
    <div className="flex flex-col text-sm md:text-base">
      <div className="mt-1 mb-4 self-center border sm:p-3 p-2 border-slate-300 rounded-md leading-7">
        <p className="font-semibold text-center leaading-7 sm:leading-normal italic">
          Application Success Rate:
        </p>
        <div className="flex justify-center items-center">
          <StarIcon className="h-[30px] w-[30px] text-gray-500 cursor-pointer" />
          <p className="font-bold px-1 py-1 text-center md:text-lg">
            {calculateSuccessRate(applications)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessRate;
