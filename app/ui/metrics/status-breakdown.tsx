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
    <section>
      <p className="font-semibold text-center italic mb-4">
        Application Status Breakdown
      </p>
      <div className="flex flex-col md:flex-row items-start gap-4 text-sm md:text-base border p-4 rounded-md mb-2 shadow-md">
        {allStatuses.map((status) => (
          <StatusItem key={status} label={status} applications={applications} />
        ))}
      </div>
    </section>
  );
};

export default StatusBreakdown;
