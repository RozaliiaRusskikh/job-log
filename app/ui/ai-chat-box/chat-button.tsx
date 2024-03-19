import { useState } from "react";
import ChatBox from "./chat-box";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export function ChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button
        className="flex md:bg-gray-900 shadow-lg items-center group text-white font-bold md:border-2 md:rounded-full px-1 md:px-2 md:py-3 border-[#848081] hover:border-emerald-400 transition-colors"
        onClick={() => setChatBoxOpen(true)}
      >
        <span className="hidden md:inline group-hover:text-emerald-300 transition-colors">
          AI Chat
        </span>
        <ChatBubbleOvalLeftEllipsisIcon className=" w-[30px] h-[30px] md:ml-1 inline text-emerald-500 md:text-white group-hover:text-white md:group-hover:text-slate-200 transition-all md:group-hover:animate-pulse" />
      </button>
      <ChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
