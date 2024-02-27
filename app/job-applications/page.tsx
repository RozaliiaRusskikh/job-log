import { Metadata } from "next";
import Table from "../ui/job-application-table/table";
import { applications } from "@/app/lib/placeholder-data";
import Search from "../ui/job-application-table/search";
import AddJobApplicationButton from "../ui/add-application/add-form";

export const metadata: Metadata = {
  title: "Job Applications |  Table",
};

const JobApplications = () => {
  return (
    <section className="text-sm md:text-base sm:h-screen">
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <h1 className="font-bold pb-4 text-md md:text-lg">
          Job Application List
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