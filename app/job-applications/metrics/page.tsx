import { Metadata } from "next";
import TotalNumberStatistics from "@/app/ui/metrics/total-number-statistics";
import { applications } from "@/app/lib/placeholder-data";
import StatusBreakdown from "@/app/ui/metrics/status-breakdown";
import SuccessRate from "@/app/ui/metrics/success-rate";
import RejectionRate from "@/app/ui/metrics/rejection-rate";
import ApplicationStatus from "@/app/ui/metrics/application-status";

export const metadata: Metadata = {
  title: "Job Applications |  Metrics",
};

const Metrics = () => {
  return (
    <section className="text-sm md:text-base sm:h-screen">
      {!!applications?.length && (
        <div className="gap-4 flex flex-col w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto items-center">
          <div className="justify-center flex flex-col sm:flex-row sm:items-baseline sm:gap-20">
            <div>
              <TotalNumberStatistics
                applications={applications}
                type="active"
              />
              <StatusBreakdown applications={applications} />
            </div>
            <ApplicationStatus applications={applications} />
          </div>
          <SuccessRate applications={applications} />
          <RejectionRate applications={applications} />
        </div>
      )}
    </section>
  );
};

export default Metrics;
