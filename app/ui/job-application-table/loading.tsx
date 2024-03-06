import { PaperClipIcon } from "@heroicons/react/24/outline";

const Loading = () => {
  return (
    <main className="mb-2 flex items-center justify-center h-screen bg-gray-100">
      <div className="flex gap-3 justify-center items-center">
        <PaperClipIcon
          className="animate-spin text-emerald-600"
          width={40}
          height={40}
        />
        <h2 className="text-primary text-lg">Processing...</h2>
      </div>
    </main>
  );
};

export default Loading;
