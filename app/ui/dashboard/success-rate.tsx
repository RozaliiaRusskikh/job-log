"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import { StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "./modal";

interface SuccessRateProps {
  applications: ApplicationProp[];
}

const SuccessRate: React.FC<SuccessRateProps> = ({ applications }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const successCategories = [
    {
      name: "High (Excellent)",
      range: "30% or higher",
      description:
        "You're hitting the mark with your applications and impressing employers.",
    },
    {
      name: "Moderate (Good)",
      range: "15-30%",
      description:
        "You're doing well, but there's still room to improve and fine-tune your approach.",
    },
    {
      name: "Average",
      range: "5-15%",
      description:
        "You're getting some responses, but there's definite room for improvement in your application strategy.",
    },
    {
      name: "Low (Needs Improvement)",
      range: "Below 5%",
      description:
        "You need to rethink your strategy and possibly upgrade your qualifications and materials.",
    },
  ];

  // Function to calculate success rate
  function calculateSuccessRate(applications: ApplicationProp[]): number {
    // Filter applications with status "interviewing"
    const successfulApplications = applications.filter(
      (app) => app.status === "interviewing"
    );

    // Calculate success rate
    const successRate =
      (successfulApplications.length / applications.length) * 100;

    return parseFloat(successRate.toFixed(2));
  }

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col text-sm md:text-base">
      <div className="mt-1 mb-4 self-center border sm:p-3 p-2 border-slate-300 rounded-md leading-7">
        <p className="font-semibold text-center leaading-7 sm:leading-normal italic">
          Application Success Rate:
        </p>
        <div className="flex justify-center items-center">
          <StarIcon
            onClick={toggleModal}
            className="h-[30px] w-[30px] text-gray-400 cursor-pointer animate-pulse hover:scale-105 transition-transform"
          />
          <p className="font-bold px-1 py-1 text-center md:text-lg">
            {calculateSuccessRate(applications)}%
          </p>
        </div>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        label="Application success rate"
      >
        <h2 className="text-center font-bold text-md md:text-lg">
          Success Rate Categories
        </h2>
        {successCategories.map((category) => {
          return (
            <div className="text-sm md:text-base my-2">
              <h2 className="font-bold underline decoration-emerald-500 decoration-2 text-gray-900">
                {category.name}: {category.range}
              </h2>
              <p>{category.description}</p>
            </div>
          );
        })}
      </CustomModal>
    </div>
  );
};

export default SuccessRate;
