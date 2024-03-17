import { useState } from "react";
import ChatBox from "./chat-box";
import { TbRobot } from "react-icons/tb";

export function ChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button className="text-white" onClick={() => setChatBoxOpen(true)}>
        AI Chat
        <TbRobot className="w-[25px] h-[25px]" />
      </button>
      <ChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
