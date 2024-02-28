import Row from "./table-row";
import { ApplicationProp } from "@/app/lib/definitions";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const Table: React.FC<{ applications: ApplicationProp[] }> = ({
  applications,
}) => {
  return (
    <table className="table-auto border-collapse border border-slate-400 shadow-xl w-full text-sm md:text-base">
      <thead className=" bg-gray-100 text-left">
        <tr>
          <th className="relative hidden lg:table-cell align-top border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Company
            <div className="inline-block ml-1 absolute right-2 top-3.5">
              <ChevronUpIcon className="w-[13px] h-[13px] cursor-pointer mb-1" />
              <ChevronDownIcon className="w-[13px] h-[13px] cursor-pointer" />
            </div>
          </th>
          <th className="relative border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Position
            <div className="hidden md:inline-block ml-1 absolute right-2 top-3.5">
              <ChevronUpIcon className="w-[13px] h-[13px] cursor-pointer mb-1" />
              <ChevronDownIcon className="w-[13px] h-[13px] cursor-pointer" />
            </div>
          </th>
          <th className="relative hidden sm:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Status
            <div className="inline-block ml-1 absolute right-2 top-3.5">
              <ChevronUpIcon className="w-[13px] h-[13px] cursor-pointer mb-1" />
              <ChevronDownIcon className="w-[13px] h-[13px] cursor-pointer" />
            </div>
          </th>
          <th className="relative hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Date
            <div className="inline-block ml-1 absolute right-2 top-3.5">
              <ChevronUpIcon className="w-[13px] h-[13px] cursor-pointer mb-1" />
              <ChevronDownIcon className="w-[13px] h-[13px] cursor-pointer" />
            </div>
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
