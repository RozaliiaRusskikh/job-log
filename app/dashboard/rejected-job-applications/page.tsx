import { Metadata } from "next";
import Table from "@/app/ui/dashboard/table";
import TotalNumberStatistics from "@/app/ui/dashboard/total-number-statistics";
import { applications } from "@/app/lib/placeholder-data";
import Search from "@/app/ui/dashboard/search";
import RejectionRate from "@/app/ui/dashboard/rejection-rate";

//applications should contain rejected items only!

export const metadata: Metadata = {
  title: "Dashboard |  Rejected Applications",
};

const RejectedAppsPage = () => {
  return (
    <section className="text-sm md:text-base">
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto flex flex-col sm:flex-row justify-center sm:items-baseline gap-5">
        <TotalNumberStatistics applications={applications} type="rejected" />
        <RejectionRate applications={applications} />
      </div>
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <h1 className="font-bold pb-4 text-lg">Rejected Job Applications</h1>
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
