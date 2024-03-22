"use client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "../job-application-table/modal";
import Form from "./form";
import { closeModal } from "@/app/lib/helper";
import { ApplicationProp } from "@/app/lib/definitions";

const AddApplication = ({
  applications,
}: {
  applications: ApplicationProp[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="fixed bottom-2 right-1">
        <button
          onClick={toggleModal}
          className="relative rounded-full shadow-md bg-slate-100 opacity-80 group"
        >
          <PlusCircleIcon className="w-16 h-16 md:w-20 md:h-20 text-emerald-700 hover:text-slate-500 hover:animate-pulse transition-all" />
          <span className="hidden text-xs absolute bottom-full left-1/2 transform -translate-x-1/2 md:text-sm  text-emerald-700 font-bold group-hover:block transition-all">
            Add Job Application
          </span>
        </button>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        label="Add a job application"
      >
        <Form
          type="add"
          closeModal={() => closeModal(setIsModalOpen)}
          applications={applications}
        />
      </CustomModal>
    </>
  );
};

export default AddApplication;
