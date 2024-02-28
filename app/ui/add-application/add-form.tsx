"use client";

import { PlusCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "../job-application-table/modal";

const AddJobApplicationButton = () => {
  const handleAddJobApplication = () => {};
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
        label="Add new job application form"
      >
        <h2 className="text-center font-bold text-md md:text-lg mt-7">
          Add New Job Application
        </h2>
        <form className="w-full">
          <div>
            <label
              className="mb-2 mt-5 block text-sm font-semibold text-gray-900"
              htmlFor="company"
            >
              Company
              <span className="text-rose-400 pl-px">*</span>
            </label>
            <input
              className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-2 text-sm outline-2 outline-emerald-500 placeholder:text-gray-500"
              id="company"
              type="company"
              name="company"
              placeholder="Enter company's name"
              required
            />
          </div>
          <div>
            <label
              className="mb-2 mt-5 block text-sm font-semibold text-gray-900"
              htmlFor="position"
            >
              Position
              <span className="text-rose-400 pl-px">*</span>
            </label>
            <input
              className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-2 text-sm outline-2 outline-emerald-500 placeholder:text-gray-500"
              id="position"
              type="position"
              name="position"
              placeholder="Enter a job title"
              required
            />
          </div>
          <div>
            <label
              className="mb-2 mt-5 block text-sm font-semibold text-gray-900"
              htmlFor="position"
            >
              Job Description Link
              <span className="text-rose-400 pl-px">*</span>
            </label>
            <input
              className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-2 text-sm outline-2 outline-emerald-500 placeholder:text-gray-500"
              id="jb-link"
              type="jb-link"
              name="jb-link"
              placeholder="Enter a job description link"
              required
            />
          </div>
          <div>
            <label
              className="mb-2 mt-5 block text-sm font-semibold text-gray-900"
              htmlFor="note"
            >
              Note
            </label>
            <textarea
              className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-2 text-sm outline-2 outline-emerald-500 placeholder:text-gray-500"
              id="note"
              name="note"
              rows={3}
              cols={200}
              placeholder="Enter a note regarding the job description"
            />
          </div>
          <LoginButton />
        </form>
      </CustomModal>
    </>
  );
};

export default AddJobApplicationButton;

function LoginButton() {
  return (
    <button className="mt-4 py-3 w-full rounded-full  bg-emerald-500 text-white font-bold transition-colors hover:bg-emerald-600 ">
      Add item
    </button>
  );
}
