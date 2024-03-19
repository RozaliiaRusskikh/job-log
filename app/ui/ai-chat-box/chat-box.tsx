"use client";

import { useChat } from "ai/react";
import clsx from "clsx";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { TbRobot } from "react-icons/tb";
import { Message } from "ai";
import Image from "next/image";
import profile from "@/public/profile.svg";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

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

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  function handleCloseChat() {
    setMessages([]);
    onClose();
  }

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

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
      <button onClick={handleCloseChat} className="mb-1 ms-auto block">
        <XCircleIcon className="w-[40px] h-[40px] text-rose-500  hover:text-gray-500 transition-colors" />
      </button>
      <div className="flex h-[550px] md:h-[600px] flex-col rounded-lg bg-gray-100 p-1 md:p-2 border shadow-xl">
        <div
          ref={scrollRef}
          className="flex flex-col h-full mt-3 px-3 overflow-y-auto"
        >
          {messages.map((message) => {
            return <ChatMessage message={message} key={message.id} />;
          })}
          {isLoading && lastMessageIsUser && (
            <div className="animate-pulse text-gray-400">
              <ChatMessage
                message={{ role: "assistant", content: "I am thinking..." }}
              />
            </div>
          )}
          {error && (
            <div className="text-rose-600">
              <ChatMessage
                message={{
                  role: "assistant",
                  content: "Something went wrong. Please try again.",
                }}
              />
            </div>
          )}
          {!error && messages.length === 0 && (
            <div className="flex flex-col md:flex-row h-full items-center justify-center gap-7 italic text-gray-700">
              <TbRobot className="shrink-0 w-[50px] h-[50px] text-emerald-600 animate-bounce" />
              <p className="w-full max-w-[75%]">
                Chat with the AI assistant about your existing job applications,
                get summaries and helpful recommendations
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me about your job applications..."
            className="truncate p-3 rounded-xl w-full border border-slate-300 outline-2 outline-emerald-500 placeholder:text-gray-500"
          ></input>
          <button
            type="submit"
            className="rounded-xl p-3 min-w-20 bg-emerald-500 text-white font-bold transition-colors hover:bg-emerald-600 border border-emerald-600 focus:hover:bg-emerald-600 uppercase shadow-md"
          >
            Send
          </button>
          <button
            onClick={() => setMessages([])}
            type="button"
            title="Clear chat"
            className="group border border-slate-300 px-2 rounded-xl shrink-0 hover:bg-slate-200 shadow-md"
          >
            <TrashIcon className="w-[25px] h-[25px] text-gray-500 group-hover:text-emerald-600 transition-colors" />
          </button>
        </form>
      </div>
    </div>
  );
}

function ChatMessage({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
}) {
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
