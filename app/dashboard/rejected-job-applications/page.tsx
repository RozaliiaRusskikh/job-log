import { Metadata } from "next";
import Table from "@/app/ui/dashboard/table";
import Info from "@/app/ui/dashboard/info";
import { applications } from "@/app/lib/placeholder-data";

//applications should contain rejected items only!

export const metadata: Metadata = {
  title: "Dashboard |  Rejected Applications",
};

const RejectedAppsPage = () => {
  return (
    <section>
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <Info applications={applications} />
      </div>
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
    </section>
  );
};

export default RejectedAppsPage;
