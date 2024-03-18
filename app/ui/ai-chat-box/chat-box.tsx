import { useChat } from "ai/react";
import clsx from "clsx";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface ChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatBox({ open, onClose }: ChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  return (
    <div
      className={clsx(
        "bottom-2 right-0 md:right-24 z-10 w-full max-w-[500px] p-1",
        {
          fixed: open,
          hidden: !open,
        }
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircleIcon className="w-[40px] h-[40px] text-rose-500  hover:text-gray-500 transition-colors" />
      </button>
      <div className="flex h-[550px] md:h-[600px] flex-col rounded-lg bg-gray-100 p-1 md:p-2 border shadow-xl">
        <div className="h-full">Messages</div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask something..."
            className="p-3 rounded-xl w-full border border-slate-300 outline-2 outline-emerald-500 placeholder:text-gray-500"
          ></input>
          <button
            type="submit"
            className="rounded-xl p-3 min-w-20 bg-emerald-500 text-white font-bold transition-colors hover:bg-emerald-600 border border-emerald-600 focus:hover:bg-emerald-600 uppercase"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
