import { Metadata } from "next";
import { applications } from "@/app/lib/placeholder-data";
import StatusBreakdown from "@/app/ui/metrics/status-breakdown";
import ApplicationStatus from "@/app/ui/metrics/application-status";
import Tips from "@/app/ui/metrics/tips";
import Rates from "@/app/ui/metrics/rates";
import ApplicationTimeline from "@/app/ui/metrics/application-timeline";

export const metadata: Metadata = {
  title: "Metrics",
};

const Metrics = () => {
  return (
    <section className="text-sm md:text-base min-h-screen">
      {!!applications?.length ? (
        <div className="gap-4 flex flex-col w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto justify-center items-center">
          <StatusBreakdown applications={applications} />
          <ApplicationStatus applications={applications} />
          <ApplicationTimeline applications={applications} />
          <Rates applications={applications} />
        </div>
      ) : (
        <p className="text-center py-16 italic">
          It looks like you haven't added any job applications yet so there is
          no data to display.
        </p>
      )}
      <div className="gap-4 w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <Tips />
      </div>
    </section>
  );
};

export default Metrics;
