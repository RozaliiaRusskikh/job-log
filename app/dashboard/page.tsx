import { Metadata } from "next";
import Table from "../ui/dashboard/table";
import { applications } from "@/app/lib/placeholder-data";
import TotalNumberStatistics from "../ui/dashboard/total-number-statistics";
import Search from "../ui/dashboard/search";
import ApplicationStatus from "../ui/dashboard/application-status";

export const metadata: Metadata = {
  title: "Dashboard |  Active Applications",
};

const Dashboard = () => {
  return (
    <section className="text-sm md:text-base">
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto justify-center flex flex-col sm:flex-row sm:items-baseline sm:gap-20">
        <TotalNumberStatistics applications={applications} type="active" />
        <ApplicationStatus applications={applications} />
      </div>
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <p className="font-bold pb-4 text-md md:text-lg">
          Active Job Applications
        </p>
        <Search />
        {!!applications?.length ? (
          <Table applications={applications} />
        ) : (
          <p className="text-center py-3 italic">
            It looks like you haven't added any job applications yet
          </p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
