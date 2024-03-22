import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100 text-primary text-lg text-center">
      <div className="flex gap-2 justify-center items-center flex-col">
        <FaceFrownIcon className="text-emerald-600" width={40} height={40} />
        <h2 className="font-semibold">404 Not Found. </h2>
        <p>Sorry, we could not find the requested page.</p>
        <p>
          Please go back to
          <Link
            href="/"
            className="ml-2 cursor-pointer decoration-2 decoration-emerald-500 underline hover:text-emerald-600 transition-colors"
          >
            Home
          </Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
