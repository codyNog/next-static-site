import React from "react";
import MenuModal from "../../organisms/Modal/menu";
import ModalStore from "../../../store/global/modal";
import Header from "../../organisms/Header";

const Root: React.FC = () => {
  const { isMenuModalOpen } = ModalStore.useContainer();
  return (
    <div>
      <Header />
      <div>aaaa</div>
      {isMenuModalOpen() && <MenuModal />}
    </div>
  );
};

export default Root;
