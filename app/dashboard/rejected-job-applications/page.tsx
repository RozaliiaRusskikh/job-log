import { Metadata } from "next";
import Table from "@/app/ui/dashboard/table";
import TotalNumberStatistics from "@/app/ui/dashboard/total-number-statistics";
import { applications } from "@/app/lib/placeholder-data";
import Search from "@/app/ui/dashboard/search";
import ApplicationStatus from "@/app/ui/dashboard/application-status";

//applications should contain rejected items only!

export const metadata: Metadata = {
  title: "Dashboard |  Rejected Applications",
};

const RejectedAppsPage = () => {
  return (
    <section>
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto flex justify-around items-baseline">
        <TotalNumberStatistics applications={applications} type="rejected" />
        <ApplicationStatus applications={applications} />
      </div>
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <p className="font-bold pb-4 text-lg">Rejected Job Applications</p>
        <Search />
        {!!applications?.length ? (
          <Table applications={applications} />
        ) : (
          <p className="text-center py-3 italic">
            It seems you haven't received any rejections yet in your job search.
            That's fantastic!
          </p>
        )}
      </div>
    </section>
  );
};

export default RejectedAppsPage;
