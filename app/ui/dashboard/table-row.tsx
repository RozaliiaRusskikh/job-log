import { ApplicationProp } from "@/app/lib/definitions";
import clsx from "clsx";
import { convertUnixToDateString } from "@/app/lib/helper";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const Row: React.FC<{ data: ApplicationProp }> = ({ data }) => {
  const { company, position, status, date, note } = data;
  return (
    <tr className="hover:bg-gray-50 active:bg-emerald-100">
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        {company}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        {position}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4 overflow-hidden">
        <p
          className={clsx("rounded-full w-fit px-3 py-1", {
            "bg-gray-200": status === "applied",
            "bg-rose-400": status === "rejected",
            "bg-yellow-400": status === "interviewing",
            "bg-emerald-400": status === "offer",
          })}
        >
          {status}
        </p>
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        {convertUnixToDateString(date)}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        {note}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        <div className="flex flex-row gap-3">
          <PencilIcon className="w-4 md:w-5 text-gray-700 cursor-pointer hover:text-emerald-300 transition-colors" />
          <TrashIcon className="w-4 md:w-5 text-gray-700 cursor-pointer hover:text-emerald-300 transition-colors" />
        </div>
      </td>
    </tr>
  );
};
export default Row;
