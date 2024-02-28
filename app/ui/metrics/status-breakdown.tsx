import React from "react";
import { ApplicationProp } from "@/app/lib/definitions";
import StatusItem from "./status-item";

interface StatusBreakdownProps {
  applications: ApplicationProp[];
}

const StatusBreakdown: React.FC<StatusBreakdownProps> = ({ applications }) => {
  // Get all unique status values
  const allStatuses: string[] = [
    ...new Set(applications.map((app) => app.status)),
  ];

  return (
    <div>
      <h1 className="font-bold text-center italic mb-4 text-base md:text-lg">
        Job Application Status Breakdown:
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-4 text-sm md:text-base border p-4 rounded-md mb-2 shadow-md">
        <div className="flex flex-row md:flex-col items-center md:gap-1 md:border-r-2 md:border-gray-200">
          <p className="text-sm md:text-base px-3 italic font-bold uppercase">
            Total
          </p>
          <span className="font-bold rounded-full px-4 mx-2 py-1 text-center max-w-fit border-2 border-gray-900 ">
            {applications.length}
          </span>
        </div>
        {allStatuses.map((status, index) => (
          <StatusItem key={index} label={status} applications={applications} />
        ))}
      </div>
    </div>
  );
};

export default StatusBreakdown;
