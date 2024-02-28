interface FormProps {
  type: string;
}

const Form: React.FC<FormProps> = ({ type }) => {
  return (
    <section>
      <h2 className="text-center font-bold text-md md:text-lg mt-7 capitalize">
        {type} Job Application
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
        {type === "edit" && (
          <div>
            <label
              className="mb-2 mt-5 block text-sm font-semibold text-gray-900"
              htmlFor="status"
            >
              Status!!!!!!!!!
              <span className="text-rose-400 pl-px">*</span>
            </label>
            <input
              className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-2 text-sm outline-2 outline-emerald-500 placeholder:text-gray-500"
              id="status"
              type="status"
              name="status"
              placeholder="Enter a status"
              required
            />
          </div>
        )}
        <LoginButton type={type} />
      </form>
    </section>
  );
};

export default Form;

const LoginButton: React.FC<{ type: string }> = ({ type }) => {
  return (
    <button className="mt-4 py-3 w-full rounded-full  bg-emerald-500 text-white font-bold transition-colors hover:bg-emerald-600 capitalize">
      {type} item
    </button>
  );
};
