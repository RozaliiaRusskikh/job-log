import { useState } from "react";
import ChatBox from "./chat-box";
import { TbRobotFace } from "react-icons/tb";

export function ChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button
        className="flex group text-white font-bold md:border-2 md:rounded-full px-1 md:px-2 md:py-3 border-[#848081] hover:border-emerald-400 transition-colors"
        onClick={() => setChatBoxOpen(true)}
      >
        <span className="hidden md:inline group-hover:text-emerald-100 transition-colors">
          AI Chat
        </span>
        <TbRobotFace className=" w-[25px] h-[25px] md:ml-1 inline text-emerald-500 md:text-white group-hover:text-white md:group-hover:text-slate-200 transition-all md:group-hover:animate-pulse" />
      </button>
      <ChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
