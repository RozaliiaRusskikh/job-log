"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "./modal";

interface RejectionRateProps {
  applications: ApplicationProp[];
}

const RejectionRate: React.FC<RejectionRateProps> = ({ applications }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const rejectionCategories = [
    {
      name: "Ideal Fit",
      range: "0%",
      description:
        "If you're experiencing no rejected applications, it means every job application aligns perfectly with your qualifications, skills, and the employer's needs. Keep up the good work!",
    },
    {
      name: "Strong Compatibility",
      range: "1% - 10%",
      description:
        "A minimal to low rejection rate indicates that the majority of your applications closely match the job criteria. You're on the right track!",
    },
    {
      name: "Partial Alignment",
      range: "11% - 25%",
      description:
        "A moderate rejection rate suggests that some of your applications are close, but not quite hitting the mark. Consider fine-tuning your application strategy and addressing any gaps in skills or experience.",
    },
    {
      name: "Marginally Qualified",
      range: "26% - 50%",
      description:
        "A high rejection rate signals that a significant portion of your applications lack essential qualifications or experience. It's time to reassess your approach and possibly upgrade your skills or qualifications.",
    },
    {
      name: "Not Suitable",
      range: "51% and above",
      description:
        "A very high rejection rate indicates that many of your applications are not meeting fundamental job requirements or aligning with employers' needs. Take this as an opportunity to rethink your strategy and focus on positions where you're a better fit.",
    },
  ];

  function calculateRejectionRate(applications: ApplicationProp[]): number {
    // Filter applications with status "rejected"
    const rejectedApplications = applications.filter(
      (app) => app.status === "rejected"
    );

    // Calculate success rate
    const successRate =
      (rejectedApplications.length / applications.length) * 100;

    return parseFloat(successRate.toFixed(2));
  }

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col text-sm md:text-base">
      <div className="mt-1 mb-4 self-center border sm:p-3 p-2 border-slate-300 rounded-md leading-7">
        <p className="font-semibold text-center leaading-7 sm:leading-normal italic">
          Application Rejection Rate:
        </p>
        <div className="flex justify-center items-center">
          <XCircleIcon
            onClick={toggleModal}
            className="h-[30px] w-[30px] cursor-pointer animate-pulse hover:scale-105 transition-transform text-rose-600"
          />
          <p className="font-bold px-1 py-1 text-center md:text-lg">
            {calculateRejectionRate(applications)}%
          </p>
        </div>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        label="Application rejection rate"
      >
        <h2 className="text-center font-bold text-md md:text-lg mt-7">
          Rejection Rate Categories
        </h2>
        {rejectionCategories.map((category, index) => {
          return (
            <div key={index} className="text-sm md:text-base my-2">
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

export default RejectionRate;
