import { ApplicationProp } from "@/app/lib/definitions";

const Row: React.FC<{ data: ApplicationProp }> = ({ data }) => {
  const { company, position, status, date, note } = data;
  return (
    <tr className="hover:bg-gray-50 active:bg-emerald-100">
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        ${company}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        ${position}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        ${status}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        ${date}
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-8 md:py-4">
        ${note}
      </td>
    </tr>
  );
};
export default Row;
