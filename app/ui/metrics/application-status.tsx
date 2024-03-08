"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

interface StatusCounts {
  [status: string]: number;
}

const ApplicationStatus: React.FC<{ applications: ApplicationProp[] }> = ({
  applications,
}) => {
  // Calculate status counts
  const statusCounts: StatusCounts = applications.reduce(
    (counts: StatusCounts, app) => {
      counts[app.status] = (counts[app.status] || 0) + 1;
      return counts;
    },
    {}
  );

  // Extract labels and counts for the chart
  const labels = Object.keys(statusCounts);
  const counts = Object.values(statusCounts);

  // Calculate total count
  const totalCount = counts.reduce((total, count) => total + count, 0);

  // Calculate percentages
  const percentages = counts.map((count) =>
    ((count / totalCount) * 100).toFixed(2)
  );

  // Define colors based on status
  const backgroundColors = labels.map((status) => {
    switch (status) {
      case "APPLIED":
        return "rgba(173, 181, 189, 0.6)";
      case "REJECTED":
        return "rgba(247, 64, 78, 0.6)";
      case "INTERVIEWING":
        return "rgba(251, 191, 36, 0.6)";
      case "OFFER":
        return "rgba(0, 214, 132, 0.6)";
      default:
        return "rgba(0, 0, 0, 0.6)";
    }
  });

  // Chart data
  const chartData = {
    datasets: [
      {
        label: "percentage",
        data: percentages,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) => color.replace("0.6", "1")), // Adjust border color
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full mb-10">
      <Pie data={chartData} />
    </div>
  );
};

export default ApplicationStatus;
