"use client";

import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { fetchSortedApplicationsByAscDate } from "../../lib/data";
import { fetchSortedApplicationsByAscStatus } from "../../lib/data";
import { fetchSortedApplicationsByDescStatus } from "../../lib/data";
import { fetchAllUserApplications } from "../../lib/data";
import { useState, useEffect } from "react";
import { ApplicationProp } from "@/app/lib/definitions";
import Row from "./table-row";
import { fetchFilteredApplications } from "../../lib/data";
import { MagnifyingGlassMinusIcon } from "@heroicons/react/24/outline";

export default function Table({
  query,
  applications,
}: {
  query?: string;
  applications: ApplicationProp[];
}) {
  const [sortedApplications, setSortedApplications] =
    useState<ApplicationProp[]>(applications);

  if (sortedApplications.length === 0) {
    return (
      <p className="text-center italic pt-3 text-gray-700">
        Sorry, we couldn't find any job applications related to your entered
        query. Please try another search
        <MagnifyingGlassMinusIcon className="text-emerald-600 sm:inline w-[30px] h-[30px] ml-1 relative left-1/2 sm:static" />
      </p>
    );
  }

  useEffect(() => {
    const filteredApplications = async () => {
      const updatedApplications = await fetchFilteredApplications(query);
      setSortedApplications(updatedApplications);
    };

    filteredApplications();
  }, [query]);

  return (
    <table className="table-auto border-collapse border border-slate-400 shadow-xl w-full text-sm md:text-base">
      <thead className=" bg-gray-100 text-left">
        <tr>
          <th className="relative hidden lg:table-cell align-top border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 lg:px-6">
            Company
            <div className="inline-block ml-1 absolute right-2 top-3.5 lg:top-1/4"></div>
          </th>
          <th className="relative border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 lg:px-6">
            Position
            <div className="hidden lg:inline-block ml-1 absolute right-2 top-3.5 lg:top-1/4"></div>
          </th>
          <th className="relative hidden sm:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 lg:px-6">
            Status
            <div className="hidden sm:inline-block ml-1 absolute right-2 md:top-3.5 top-1 lg:top-1/4">
              <ChevronUpIcon
                className="w-[14px] h-[14px] cursor-pointer   text-emerald-800"
                onClick={async () => {
                  const updatedSortedApplications =
                    await fetchSortedApplicationsByAscStatus();
                  setSortedApplications(updatedSortedApplications);
                }}
              />
              <ChevronDownIcon
                className="w-[14px] h-[14px] cursor-pointer text-emerald-800"
                onClick={async () => {
                  const updatedSortedApplications =
                    await fetchSortedApplicationsByDescStatus();
                  setSortedApplications(updatedSortedApplications);
                }}
              />
            </div>
          </th>
          <th className="relative hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 lg:px-6">
            Date
            <div className="inline-block ml-1 absolute right-2 top-3.5 lg:top-1/4">
              <ChevronUpIcon
                className="w-[14px] h-[14px] cursor-pointer   text-emerald-800"
                onClick={async () => {
                  const updatedSortedApplications =
                    await fetchSortedApplicationsByAscDate();
                  setSortedApplications(updatedSortedApplications);
                }}
              />
              <ChevronDownIcon
                className="w-[14px] h-[14px] cursor-pointer text-emerald-800"
                onClick={async () => {
                  const updatedSortedApplications =
                    await fetchAllUserApplications();
                  setSortedApplications(updatedSortedApplications);
                }}
              />
            </div>
          </th>
          <th className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 lg:px-6">
            Note
          </th>
          <th className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {!!sortedApplications?.length &&
          sortedApplications.map((application: ApplicationProp) => {
            return (
              <Row
                key={application.id}
                data={application}
                value={application.id}
              />
            );
          })}
      </tbody>
    </table>
  );
}
