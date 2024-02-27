import { ReactNode } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  label: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
  label,
}) => {
  useEffect(() => {
    Modal.setAppElement("#main-content");
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={label}
      style={customStyles}
    >
      <XMarkIcon
        className="cursor-pointer h-[30px] w-[30px] hover:text-gray-500 text-rose-500 transition-colors absolute right-0 mr-2"
        onClick={onClose}
      />
      {children}
    </Modal>
  );
};

export default CustomModal;
