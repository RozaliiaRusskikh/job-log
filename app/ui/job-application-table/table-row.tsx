"use client";

import { ApplicationProp } from "@/app/lib/definitions";
import clsx from "clsx";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "../job-application-table/modal";
import Form from "../crud-applications/form";
import { deleteApplication } from "@/app/lib/actions/delete-application";
import { toast } from "react-hot-toast";

interface RowProps {
  data: ApplicationProp;
  value: string;
}

export default function Row({ data, value }: RowProps) {
  const { company, position, status, date, note, jobDescriptionLink } = data;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  async function onDelete(formData: FormData) {
    try {
      const result = await deleteApplication(formData);
      if (result.message.includes("error")) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <tr className="hover:bg-gray-50 active:bg-emerald-100 align-top">
        <td className="hidden lg:table-cell border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4">
          {company}
        </td>
        <td className="font-bold lg:font-normal leading-tight lg:leading-normal border-collapse border border-slate-300 px-2 py-2 md:px-4 md:py-4 text-gray-800">
          <a
            className="cursor-pointer decoration-2 decoration-emerald-500 underline hover:text-emerald-600 transition-colors"
            target="_blank"
            href={jobDescriptionLink}
          >
            {" "}
            {position}
          </a>
          <dl className="lg:hidden">
            <dt className="sr-only">Company</dt>
            <dd>@ {company},</dd>
            <dt className="sr-only">Date</dt>
            <dd className="font-normal text-gray-700 mt-1 leading-normal">
              {date}
            </dd>
            <dt className="sr-only sm:hidden">Status</dt>
            <dd
              className={clsx(
                "rounded-full w-fit px-3 py-1 sm:hidden mt-1 leading-normal font-normal",
                {
                  "bg-gray-200": status === "APPLIED",
                  "bg-rose-400": status === "REJECTED",
                  "bg-yellow-400": status === "INTERVIEWING",
                  "bg-emerald-400": status === "OFFER",
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
              "bg-gray-200": status === "APPLIED",
              "bg-rose-400": status === "REJECTED",
              "bg-yellow-400": status === "INTERVIEWING",
              "bg-emerald-400": status === "OFFER",
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
            <button type="button" onClick={handleDelete}>
              <TrashIcon className="w-4 md:w-5 text-gray-700 cursor-pointer hover:text-emerald-300 transition-colors" />
            </button>
          </div>
        </td>
      </tr>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        label="Edit a job application"
      >
        <Form type="edit" initialValues={data} closeModal={toggleModal} />
      </CustomModal>

      <CustomModal
        isOpen={showDeleteModal}
        onClose={closeDeleteModal}
        label="Delete a job application "
      >
        <div>
          <form
            action={onDelete}
            onSubmit={closeDeleteModal}
            className="flex flex-col items-center gap-5"
          >
            <p>Are you sure you want to delete this job application?</p>
            <div className="flex gap-6">
              <button
                type="submit"
                className="font-bold rounded-lg bg-emerald-400 px-5 py-2 text-sm transition-colors hover:bg-emerald-500 md:text-base border-2 border-emerald-500"
              >
                YES
              </button>
              <button
                type="button"
                onClick={closeDeleteModal}
                className="font-bold rounded-lg bg-rose-400 px-5 py-2 text-sm transition-colors hover:bg-rose-500 md:text-base border-2 border-rose-500"
              >
                NO
              </button>
            </div>
            <input
              className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5"
              name="applicationId"
              type="hidden"
              value={value}
              required
            />
          </form>
        </div>
      </CustomModal>
    </>
  );
}
