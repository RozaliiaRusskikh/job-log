"use client";

import { Status, ApplicationProp } from "@/app/lib/definitions";
import clsx from "clsx";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "../job-application-table/modal";
import Form from "../crud-applications/form";

const Row: React.FC<{ data: ApplicationProp }> = ({ data }) => {
  const { company, position, status, date, note, jobDescriptionLink } = data;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <tr className="hover:bg-gray-50 active:bg-emerald-100 align-top">
        <td className="hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
          {company}
        </td>
        <td className="font-bold lg:font-normal leading-tight lg:leading-normal border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 text-gray-800">
          <a
            className="cursor-pointer hover:decoration-2 hover:decoration-emerald-500 hover:underline transition-all"
            target="_blank"
            href={jobDescriptionLink}
          >
            {" "}
            {position}
          </a>
          <dl className="lg:hidden">
            <dt className="sr-only">Company</dt>
            <dd>at {company},</dd>
            <dt className="sr-only">Date</dt>
            <dd className="font-normal text-gray-700 mt-1 leading-normal">
              {date}
            </dd>
            <dt className="sr-only sm:hidden">Status</dt>
            <dd
              className={clsx(
                "rounded-full w-fit px-3 py-1 sm:hidden mt-1 leading-normal font-normal",
                {
                  "bg-gray-200": status === Status.Applied,
                  "bg-rose-400": status === Status.Rejected,
                  "bg-yellow-400": status === Status.Interviewing,
                  "bg-emerald-400": status === Status.Offer,
                }
              )}
            >
              {status.toLocaleLowerCase()}
            </dd>
          </dl>
        </td>
        <td className="hidden sm:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
          <p
            className={clsx("rounded-full w-fit px-3 py-1", {
              "bg-gray-200": status === Status.Applied,
              "bg-rose-400": status === Status.Rejected,
              "bg-yellow-400": status === Status.Interviewing,
              "bg-emerald-400": status === Status.Offer,
            })}
          >
            {status.toLocaleLowerCase()}
          </p>
        </td>
        <td className="hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 whitespace-nowrap">
          {date}
        </td>
        <td className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 max-w-prose">
          {note}
        </td>
        <td className="border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
          <div className="flex flex-row gap-3">
            <PencilIcon
              onClick={toggleModal}
              className="w-4 md:w-5 text-gray-700 cursor-pointer hover:text-emerald-300 transition-colors"
            />
            <TrashIcon className="w-4 md:w-5 text-gray-700 cursor-pointer hover:text-emerald-300 transition-colors" />
          </div>
        </td>
      </tr>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        label="Edit a job application"
      >
        <Form type="edit" initialValues={data} />
      </CustomModal>
    </>
  );
};
export default Row;
