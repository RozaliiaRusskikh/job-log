import { Metadata } from "next";
import Table from "../ui/job-application-table/table";
import { applications } from "@/app/lib/placeholder-data";
import TotalNumberStatistics from "../ui/metrics/total-number-statistics";
import Search from "../ui/job-application-table/search";
import ApplicationStatus from "../ui/metrics/application-status";
import StatusBreakdown from "../ui/metrics/status-breakdown";
import SuccessRate from "../ui/metrics/success-rate";
import AddJobApplicationButton from "../ui/add-application/add-form";

export const metadata: Metadata = {
  title: "Job Applications |  Table",
};

const JobApplications = () => {
  return (
    <section className="text-sm md:text-base">
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
        </div>
      )}
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <h1 className="font-bold pb-4 text-md md:text-lg">
          Active Job Applications
        </h1>
        <Search />
        {!!applications?.length ? (
          <Table applications={applications} />
        ) : (
          <p className="text-center py-3 italic h-screen">
            It looks like you haven't added any job applications yet
          </p>
        )}
      </div>
      <AddJobApplicationButton />
    </section>
  );
};

export default JobApplications;
