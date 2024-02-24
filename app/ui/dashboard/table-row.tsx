import { ApplicationProp } from "@/app/lib/definitions";
import clsx from "clsx";
import { convertUnixToDateString } from "@/app/lib/helper";

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
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        <p
          className={clsx("rounded-full w-fit px-3 py-1", {
            "bg-gray-200": status === "applied",
            "bg-rose-500": status === "rejected",
            "bg-yellow-500": status === "interviewing",
            "bg-emerald-500": status === "offer",
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
    </tr>
  );
};
export default Row;
