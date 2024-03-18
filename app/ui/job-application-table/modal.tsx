import { ReactNode } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from "react-responsive";

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
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    Modal.setAppElement("#main-content");
  }, []);

  const customTabletStyles = {
    content: {
      top: "50%",
      left: "50%",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  const customMobileStyles = {
    content: {
      top: "10%",
      bottom: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={label}
      style={isTablet ? customTabletStyles : customMobileStyles}
    >
      <XCircleIcon
        className="cursor-pointer h-[40px] w-[40px] hover:text-gray-500 text-rose-600 transition-colors absolute right-0 mr-2"
        onClick={onClose}
      />
      {children}
    </Modal>
  );
};

export default CustomModal;
