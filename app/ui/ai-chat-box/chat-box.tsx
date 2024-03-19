"use client";

import { useChat } from "ai/react";
import clsx from "clsx";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { TbRobot } from "react-icons/tb";
import { Message } from "ai";
import Image from "next/image";
import profile from "@/public/profile.svg";
import { useSession } from "next-auth/react";

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
        <div className="flex flex-col h-full mt-3 px-3 overflow-y-auto">
          <span className="font-semibold p-1 text-center border-b border-slate-300 pb-3 italic">
            Chat with the AI assistant{" "}
            <TbRobot className="inline text-emerald-500 w-[30px] h-[30px]" />{" "}
            about your existing job applications, get summaries and helpful
            recommendations:
          </span>
          <div>
            {messages.map((message) => {
              return <ChatMessage message={message} key={message.id} />;
            })}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me about your job applications..."
            className="truncate p-3 rounded-xl w-full border border-slate-300 outline-2 outline-emerald-500 placeholder:text-gray-500"
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

function ChatMessage({ message: { role, content } }: { message: Message }) {
  const isAIMessage = role === "assistant";

  const { data: session } = useSession();

  return (
    <article
      className={clsx("my-3 flex items-center gap-2", {
        "justify-start me-5": isAIMessage,
        "justify-end ms-5": !isAIMessage,
      })}
    >
      {isAIMessage && (
        <TbRobot className="text-emerald-500 mt-2 shrink-0 w-[35px] h-[35px]" />
      )}

      {!isAIMessage && (
        <Image
          src={session?.user ? session?.user.image : profile}
          alt="user image"
          width={50}
          height={50}
          className="rounded-full w-[40px] h-[40px] cover"
        />
      )}
      <p
        className={clsx("whitespace-pre-line rounded-lg px-3 py-2", {
          "bg-emerald-100": isAIMessage,
          "bg-white": !isAIMessage,
        })}
      >
        {content}
      </p>
    </article>
  );
}
