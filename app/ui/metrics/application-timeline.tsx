"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import { Bar } from "react-chartjs-2";

const ApplicationTimeline: React.FC<{
  applications: ApplicationProp[];
}> = ({ applications }) => {
  // Get current year
  const currentYear: number = new Date().getFullYear();

  // Filter applications for current year
  const applicationsThisYear: ApplicationProp[] = applications.filter(
    (app) => new Date(app.date * 1000).getFullYear() === currentYear
  );

  // Initialize an array to hold the count of applications for each month
  const monthlyApplicationCounts: number[] = Array(12).fill(0);

  // Count applications for each month
  applicationsThisYear.forEach((app) => {
    const month: number = new Date(app.date * 1000).getMonth();
    monthlyApplicationCounts[month]++;
  });

  // Define labels for months
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Define data for the bar chart
  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Amount of job applications",
        data: monthlyApplicationCounts,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Define options for the chart
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of job applications",
        },
        ticks: {
          stepSize: 1, // Set the step size to 1 for integer values
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  // Return the component with the bar chart
  return (
    <div className="w-full mb-10">
      <h2 className="font-bold text-center italic mb-4 text-base md:text-lg">
        Job Application Timeline for the {currentYear} year:
      </h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ApplicationTimeline;
