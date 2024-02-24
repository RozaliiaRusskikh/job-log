import { Metadata } from "next";
import Table from "../ui/dashboard/table";
import { applications } from "@/app/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Dashboard |  Active Applications",
};

const Dashboard = () => {
  return (
    <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
      <p className="font-bold pb-4 text-lg">Active Job Applications</p>
      {!!applications?.length ? (
        <Table applications={applications} />
      ) : (
        <p className="text-center py-3 italic">
          It looks like you haven't added any job applications yet
        </p>
      )}
    </div>
  );
};

export default Dashboard;
