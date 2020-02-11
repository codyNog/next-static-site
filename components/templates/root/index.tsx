import React from "react";
import MenuModal from "../../organisms/Modal/menu";
import ModalStore from "../../../store/global/modal";
import Layout from "../../layouts";
import TopSection from "../../organisms/Root/section/top";
import ServiceSection from "../../organisms/Root/section/service";
import WorksSection from "../../organisms/Root/section/works";
import ContactSection from "../../organisms/Root/section/contact";

const Root: React.FC = () => {
  const { isMenuModalOpen } = ModalStore.useContainer();
  return (
    <Layout>
      {isMenuModalOpen() && <MenuModal />}
      <TopSection />
      <ServiceSection />
      <WorksSection />
      <ContactSection />
    </Layout>
  );
};

export default Root;
