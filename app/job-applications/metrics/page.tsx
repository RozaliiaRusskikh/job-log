import { Metadata } from "next";
import StatusBreakdown from "@/app/ui/metrics/status-breakdown";
import ApplicationStatus from "@/app/ui/metrics/application-status";
import Tips from "@/app/ui/metrics/tips";
import Rates from "@/app/ui/metrics/rates";
import ApplicationTimeline from "@/app/ui/metrics/application-timeline";
import { fetchAllUserApplications } from "../../lib/data";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Unauthorized from "@/app/ui/job-application-table/unauthorized";

export const metadata: Metadata = {
  title: "Metrics",
};

const Metrics = async () => {
  const session = await getServerSession(authOptions);

  const applications = await fetchAllUserApplications();

  if (!session) {
    return <Unauthorized />;
  }

  return (
    <section className="text-sm md:text-base min-h-screen">
      {!!applications?.length ? (
        <div className="gap-4 flex flex-col w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-hidden justify-center items-center">
          <ApplicationTimeline applications={applications as any} />
          <div className="flex flex-col md:flex-row md:items-center md:gap-20">
            <StatusBreakdown applications={applications as any} />
            <ApplicationStatus applications={applications as any} />
          </div>
          <Rates applications={applications as any} />
        </div>
      ) : (
        <p className="text-center py-16 italic">
          It looks like you have not added any job applications yet so there are
          no analytics to display.
        </p>
      )}
      <div className="gap-4 w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <Tips />
      </div>
    </section>
  );
};

export default Metrics;
