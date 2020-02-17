import { useState } from "react";
import { createContainer } from "unstated-next";

type ModalState = "close" | "menu";

const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>("close");

  const closeModal = () => {
    setModalState("close");
  };

  const openMenuModal = () => {
    setModalState("menu");
  };

  const isMenuModalOpen = () => {
    return modalState === "menu";
  };

  return { closeModal, openMenuModal, isMenuModalOpen };
};

const ModalStore = createContainer(useModal);

export default ModalStore;
