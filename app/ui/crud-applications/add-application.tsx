"use client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "../job-application-table/modal";
import Form from "./form";

const AddApplication = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="fixed bottom-5 right-7 md:bottom-10 md:right-12">
        <button
          onClick={toggleModal}
          className="relative rounded-full shadow-md bg-slate-100 opacity-80 group"
        >
          <PlusCircleIcon className="w-16 h-16 md:w-20 md:h-20 text-emerald-700 hover:text-slate-500 transition-colors" />
          <span className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 text-sm md:text-base  text-emerald-700 font-bold group-hover:block transition-all">
            Add Job Application
          </span>
        </button>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        label="Add a job application"
      >
        <Form type="add" />
      </CustomModal>
    </>
  );
};

export default AddApplication;
