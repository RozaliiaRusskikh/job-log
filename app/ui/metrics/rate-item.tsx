"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "../job-application-table/modal";
import clsx from "clsx";

interface CategoriesProps {
  name: string;
  range: string;
  description: string;
}

interface RateItemProps {
  applications: ApplicationProp[];
  status: string;
  categories: CategoriesProps[];
  title: string;
  modalTitle: string;
}

const RateItem: React.FC<RateItemProps> = ({
  applications,
  status,
  categories,
  title,
  modalTitle,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to calculate rate
  function calculateRate(applications: ApplicationProp[]): number {
    // Filter applications
    const filteredApplications = applications.filter(
      (app) => app.status === status
    );

    // Calculate rate
    const rate = (filteredApplications.length / applications.length) * 100;

    return parseFloat(rate.toFixed(2));
  }

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col text-sm md:text-base w-64 md:w-80">
      <div className="mt-1 mb-4 self-center border sm:p-3 p-2 border-slate-300 rounded-md leading-7 shadow-md">
        <p className="font-semibold text-center leaading-7 sm:leading-normal italic">
          {title}
        </p>
        <div className="flex justify-center gap-1 items-center">
          {status === "interviewing" ? (
            <BriefcaseIcon
              onClick={toggleModal}
              className="h-[30px] w-[30px] text-emerald-700 cursor-pointer animate-pulse hover:scale-105 transition-transform"
            />
          ) : (
            <>
              <HandThumbUpIcon
                onClick={toggleModal}
                className="h-[30px] w-[30px] text-rose-400 cursor-pointer animate-pulse hover:scale-105 transition-transform"
              />
              <HandThumbDownIcon
                onClick={toggleModal}
                className="h-[30px] w-[30px] text-rose-400 cursor-pointer animate-pulse hover:scale-105 transition-transform"
              />
            </>
          )}
          <p className="font-bold px-1 py-1 text-center md:text-lg">
            {calculateRate(applications)}%
          </p>
        </div>
        <div className="relative w-full h-4 bg-gray-200 rounded-md mt-2">
          <div
            className={clsx("absolute top-0 left-0 h-full rounded-md", {
              "bg-rose-400": status === "rejected",
              "bg-emerald-400": status === "interviewing",
            })}
            style={{ width: `${calculateRate(applications)}%` }}
          ></div>
        </div>
        <p className="text-xs text-center mt-1">
          *Percentage calculated from {status} status
        </p>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        label="Application success rate"
      >
        <h2 className="text-center font-bold text-md md:text-lg mt-7">
          {modalTitle}
        </h2>
        {categories.map((category, index) => {
          return (
            <div key={index} className="text-sm md:text-base my-2">
              <h2 className="font-bold underline decoration-emerald-500 decoration-2 text-gray-900">
                {category.name}: {category.range}
              </h2>
              <p>{category.description}</p>
            </div>
          );
        })}
        <p className="my-2">
          For tips on optimizing your job hunt, please refer to{" "}
          <a
            href="#job-hunt-tactics"
            className="text-amber-500 cursor-pointer hover:underline transition-all"
            onClick={toggleModal}
          >
            Optimizing Job Hunt: 10 Essential Tactics
          </a>
        </p>
      </CustomModal>
    </div>
  );
};

export default RateItem;
