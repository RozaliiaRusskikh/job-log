import { Metadata } from "next";
import Table from "../ui/dashboard/table";
import { applications } from "@/app/lib/placeholder-data";
import TotalNumberStatistics from "../ui/dashboard/total-number-statistics";
import Search from "../ui/dashboard/search";
import ApplicationStatus from "../ui/dashboard/application-status";
import StatusBreakdown from "../ui/dashboard/status-breakdown";
import SuccessRate from "../ui/dashboard/success-rate";
import AddJobApplicationButton from "../ui/add-application/add-button";

export const metadata: Metadata = {
  title: "Dashboard |  Active Applications",
};

const Dashboard = () => {
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

export default Dashboard;
