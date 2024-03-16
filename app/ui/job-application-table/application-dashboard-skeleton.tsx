import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchSkeleton() {
  return (
    <div className="relative flex flex-1 mb-3 xl:w-2/3 animate-pulse">
      <label htmlFor="search" className="sr-only">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </label>
      <input className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-8 md:pl-10 text-sm md:text-[14.5px] outline-2 placeholder:text-gray-500 outline-emerald-500" />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 animate-pulse" />
    </div>
  );
}

function TableRowSkeleton() {
  return (
    <tr className="align-top">
      <td className="hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
        <div className="h-6 w-10 md:w-32 rounded bg-gray-100"></div>
      </td>
      <td className="font-bold lg:font-normal leading-tight lg:leading-normal border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 text-gray-800">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
        <dl className="lg:hidden">
          <dt className="sr-only">Company</dt>
          <dd>
            <div className="h-6 w-32 rounded bg-gray-100"></div>
          </dd>
          <dt className="sr-only">Date</dt>
          <dd className="font-normal text-gray-700 mt-1 leading-normal">
            <div className="h-6 w-32 rounded bg-gray-100"></div>
          </dd>
          <dt className="sr-only sm:hidden">Status</dt>
          <dd className="sm:hidden">
            <div className="h-6 w-32 rounded bg-gray-100"></div>
          </dd>
        </dl>
      </td>
      <td className="hidden sm:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      <td className="hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 whitespace-nowrap">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 max-w-prose">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      <td className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
        <div className="flex flex-row gap-3 items-center justify-center">
          <div className="h-6 w-6 rounded bg-gray-100"></div>
          <div className="h-6 w-6 rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

function TableSkeleton() {
  return (
    <table className="table-auto border-collapse border border-slate-400 shadow-xl w-full text-sm md:text-base animate-pulse">
      <thead className=" bg-gray-100 text-left">
        <tr>
          <th className="relative hidden lg:table-cell align-top border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            <div className="h-6 w-32 rounded bg-gray-300 animate-pulse"></div>
            <div className="inline-block ml-1 absolute right-2 top-3.5"></div>
          </th>
          <th className="relative border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            <div className="h-6 w-32 rounded bg-gray-300 animate-pulse"></div>
            <div className="hidden lg:inline-block ml-1 absolute right-2 top-3.5"></div>
          </th>
          <th className="relative hidden sm:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            <div className="h-6 w-32 rounded bg-gray-300 animate-pulse"></div>
            <div className="hidden sm:inline-block ml-1 absolute right-2 md:top-3.5 top-1"></div>
          </th>
          <th className="relative hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            <div className="h-6 w-32 rounded bg-gray-300 animate-pulse"></div>
            <div className="inline-block ml-1 absolute right-2 top-3.5"></div>
          </th>
          <th className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            <div className="h-6 w-32 rounded bg-gray-300 animate-pulse"></div>
          </th>
          <th className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            <div className="h-6 w-32 rounded bg-gray-300 animate-pulse"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
      </tbody>
    </table>
  );
}

export function ApplicationDashboardSkeleton() {
  return (
    <section className="text-sm md:text-base min-h-screen">
      <div className="w-full my-4 md:my-8 p-4 md:p-8 bg-white rounded-lg overflow-hidden">
        <h1 className="font-bold pb-4 text-md md:text-lg">
          <div className="h-6 w-48 rounded bg-gray-100 animate-pulse"></div>
        </h1>
        <SearchSkeleton />
        <TableSkeleton />
      </div>
    </section>
  );
}
