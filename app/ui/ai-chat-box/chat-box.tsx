import { useChat } from "ai/react";
import clsx from "clsx";

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
        "bottom-5 right-10 md:bottom-10 md:right-12 z-10 w-full max-w-[500px] p-1 xl:right-36",
        {
          fixed: open,
          hidden: !open,
        }
      )}
    >
      ChatBox
    </div>
  );
}
