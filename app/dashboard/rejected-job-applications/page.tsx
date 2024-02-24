import { Metadata } from "next";
import Table from "@/app/ui/dashboard/table";
import { applications } from "@/app/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Dashboard |  Rejected Applications",
};

const RejectedAppsPage = () => {
  return (
    <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
      <p className="font-bold pb-4 text-lg">Rejected Job Applications</p>
      {!!applications?.length ? (
        <Table applications={applications} />
      ) : (
        <p className="text-center py-3 italic">
          It seems you haven't received any rejections yet in your job search.
          That's fantastic!
        </p>
      )}
    </div>
  );
};

export default RejectedAppsPage;
