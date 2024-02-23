import Row from "./table-row";

export default function Table() {
  return (
    <table className="table-fixed border-collapse border border-slate-400 shadow-lg">
      <thead className=" bg-gray-100">
        <tr>
          <th className="border-collapse border border-slate-300 px-8 py-4">
            Company
          </th>
          <th className="border-collapse border border-slate-300 px-8 py-4">
            Position
          </th>
          <th className="border-collapse border border-slate-300 px-8 py-4">
            Status
          </th>
          <th className="border-collapse border border-slate-300 px-8 py-4">
            Date
          </th>
          <th className="border-collapse border border-slate-300 px-8 py-4">
            Note
          </th>
        </tr>
      </thead>
      <tbody>
        <Row />
      </tbody>
    </table>
  );
}
