"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState } from "react";

Chart.register(CategoryScale);

const ApplicationStatus: React.FC<{ applications: ApplicationProp[] }> = ({
  applications,
}) => {
  // Calculate status counts
  const statusCounts = applications.reduce((counts, app) => {
    counts[app.status] = (counts[app.status] || 0) + 1;
    return counts;
  }, {});

  // Extract labels and counts for the chart
  const labels = Object.keys(statusCounts);
  const counts = Object.values(statusCounts);

  // Define colors based on status
  const backgroundColors = labels.map((status) => {
    switch (status) {
      case "applied":
        return "rgba(173, 181, 189, 0.6)"; // bg-gray-200
      case "rejected":
        return "rgba(247, 64, 78, 0.6)"; // bg-rose-400
      case "interviewing":
        return "rgba(251, 191, 36, 0.6)"; // bg-yellow-400
      case "offer":
        return "rgba(0, 214, 132, 0.6)"; // bg-emerald-400
      default:
        return "rgba(0, 0, 0, 0.6)"; // Default color
    }
  });

  // Chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Application Status",
        data: counts,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) => color.replace("0.6", "1")), // Adjust border color
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <p>Application Status Breakdown</p>
      <Pie data={chartData} />
    </div>
  );
};

export default ApplicationStatus;
