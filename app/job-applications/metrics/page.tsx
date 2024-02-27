import { Metadata } from "next";
import TotalNumberStatistics from "@/app/ui/metrics/total-number-statistics";
import { applications } from "@/app/lib/placeholder-data";
import StatusBreakdown from "@/app/ui/metrics/status-breakdown";
import SuccessRate from "@/app/ui/metrics/success-rate";
import RejectionRate from "@/app/ui/metrics/rejection-rate";
import ApplicationStatus from "@/app/ui/metrics/application-status";
import Tips from "@/app/ui/metrics/tips";

export const metadata: Metadata = {
  title: "Job Applications |  Metrics",
};

const Metrics = () => {
  return (
    <section className="text-sm md:text-base min-h-screen">
      {!!applications?.length ? (
        <div className="gap-4 flex flex-col w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto items-center">
          <SuccessRate applications={applications} />
          <div className="justify-center flex flex-col sm:flex-row sm:items-baseline sm:gap-20">
            <div>
              <TotalNumberStatistics applications={applications} />
              <StatusBreakdown applications={applications} />
            </div>
            <ApplicationStatus applications={applications} />
          </div>
          <RejectionRate applications={applications} />
        </div>
      ) : (
        <p className="text-center py-16 italic">
          It looks like you haven't added any job applications yet so there is
          no data to display.
        </p>
      )}
      <div className="gap-4 flex flex-col w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto items-center">
        <Tips />
      </div>
    </section>
  );
};

export default Metrics;
