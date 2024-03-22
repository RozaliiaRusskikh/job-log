import { Metadata } from "next";
import Table from "../../ui/job-application-table/table";
import Search from "../../ui/job-application-table/search";
import { fetchAllUserApplications } from "../../lib/data";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Unauthorized from "../../ui/job-application-table/unauthorized";

export const metadata: Metadata = {
  title: "Job Applications",
};

const JobApplications = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const session = await getServerSession(authOptions);

  const applications = await fetchAllUserApplications();

  const query = searchParams?.query || "";

  if (!session) {
    return <Unauthorized />;
  }

  return (
    <section className="text-sm md:text-base min-h-screen">
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-x-auto">
        <h1 className="font-bold pb-4 text-md md:text-lg">
          Job Application List
        </h1>{" "}
        {!!applications?.length ? (
          <>
            <Search />
            <Table query={query} applications={applications} />
          </>
        ) : (
          <p className="text-center py-3 italic h-screen">
            It looks like you have not added any job applications yet so there
            is no data to display.
          </p>
        )}
      </div>
    </section>
  );
};

export default JobApplications;
