import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Unauthorized = () => {
  return (
    <main className="mt-20 flex items-start justify-center h-screen bg-gray-100">
      <div className="flex gap-3 justify-center items-center flex-col md:flex-row">
        <FaceFrownIcon className="text-emerald-600" width={40} height={40} />
        <h2 className="text-primary text-lg text-center">
          Access Denied. Please{" "}
          <Link
            href="/"
            className="cursor-pointer decoration-2 decoration-emerald-500 underline hover:text-emerald-600 transition-colors"
          >
            log in{" "}
          </Link>{" "}
          to browse this content
        </h2>
      </div>
    </main>
  );
};

export default Unauthorized;
