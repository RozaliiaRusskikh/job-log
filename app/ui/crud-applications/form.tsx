"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import { createApplication } from "@/app/lib/actions/create-application";
import { updateApplication } from "@/app/lib/actions/update-application";
import { toast } from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { fetchAllUserApplications } from "@/app/lib/data";

interface FormProps {
  type: string;
  initialValues?: ApplicationProp;
  closeModal: () => void;
  value?: string;
  applications: ApplicationProp[];
}

const Form: React.FC<FormProps> = ({
  type,
  initialValues,
  closeModal,
  value,
  applications,
}) => {
  async function onCreate(formData: FormData) {
    try {
      const result = await createApplication(formData);
      applications = await fetchAllUserApplications();
      if (result.message.includes("error")) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    } catch (error) {
      console.error("Error creating application:", error);
    }
  }

  async function onUpdate(formData: FormData) {
    try {
      const result = await updateApplication(value as string, formData);
      if (result.message.includes("error")) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
      return updateApplication.bind(null, value as string);
    } catch (error) {
      console.error("Error updating application:", error);
    }
  }

  return (
    <section>
      <h2 className="text-center font-bold text-md md:text-lg mt-7 capitalize">
        {type} Job Application
      </h2>
      <form
        id="applicationForm"
        onSubmit={closeModal}
        action={type === "edit" ? onUpdate : onCreate}
        className="w-full"
      >
        <div>
          <label
            className="mb-2 mt-5 block text-sm font-semibold text-gray-900"
            htmlFor="company"
          >
            Company
            <span className="text-rose-400 pl-px">*</span>
          </label>
          <input
            defaultValue={initialValues ? initialValues.company : ""}
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
            defaultValue={initialValues ? initialValues.position : ""}
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
            defaultValue={initialValues ? initialValues.jobDescriptionLink : ""}
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
            defaultValue={
              initialValues ? (initialValues.note as string) || "" : ""
            }
            className="block w-full rounded-md border border-slate-300 py-[9px] pl-2 text-sm outline-2 outline-emerald-500 placeholder:text-gray-500"
            id="note"
            name="note"
            rows={3}
            cols={200}
            placeholder="Enter a note regarding the job description"
          />
        </div>
        {type === "edit" && (
          <div>
            <label
              className="mb-2 mt-5 block text-sm font-semibold text-gray-900"
              htmlFor="status"
            >
              Status
              <span className="text-rose-400 pl-px">*</span>
            </label>
            <select
              defaultValue={initialValues ? initialValues.status : ""}
              id="status"
              name="status"
              required
              className="text-sm border border-slate-300 text-gray-900 py-[9px] p-2.5 outline-2  outline-emerald-500 rounded-md focus:ring-emerald-500 focus:border-emerald-500 w-1/2"
            >
              <option value="INTERVIEWING">INTERVIEWING</option>
              <option value="APPLIED">APPLIED</option>
              <option value="OFFER">OFFER</option>
              <option value="REJECTED">REJECTED</option>
            </select>
            <input type="hidden" name="applicationId" value={value} />
          </div>
        )}
        <LoginButton type={type} />
      </form>
    </section>
  );
};

export default Form;

interface LoginButtonProps {
  type: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ type }) => {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className="mt-4 py-3 w-full rounded-full  bg-emerald-500 text-white font-bold transition-colors hover:bg-emerald-600 capitalize"
    >
      {pending ? (
        <p>
          {`${type}ing item...`}{" "}
          <PaperClipIcon className="w-[25px] h-[25px] inline animate-spin" />
        </p>
      ) : (
        `${type} item`
      )}
    </button>
  );
};
