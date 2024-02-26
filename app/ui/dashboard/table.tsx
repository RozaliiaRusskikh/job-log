import Row from "./table-row";
import { ApplicationProp } from "@/app/lib/definitions";

const Table: React.FC<{ applications: ApplicationProp[] }> = ({
  applications,
}) => {
  return (
    <table className="table-auto border-collapse border border-slate-400 shadow-xl w-full text-sm md:text-base">
      <thead className=" bg-gray-100 text-left">
        <tr>
          <th className="hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Company
          </th>
          <th className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Position
          </th>
          <th className="hidden sm:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Status
          </th>
          <th className="hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Date
          </th>
          <th className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Note
          </th>
          <th className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {applications.map((application: ApplicationProp) => {
          return <Row key={application.app_id} data={application} />;
        })}
      </tbody>
    </table>
  );
};
export default Table;
