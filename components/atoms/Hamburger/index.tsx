import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import { blackColor, whiteColor } from "../../../constrants/style";

interface Props {
  isOpen: boolean;
  onClick?: () => void;
}

const HamburgerButton: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <HamburgerMenu
      isOpen={isOpen}
      menuClicked={onClick}
      width={18}
      height={15}
      strokeWidth={1}
      rotate={0}
      color={isOpen ? whiteColor : blackColor}
      borderRadius={0}
      animationDuration={0.5}
    />
  );
};

export default HamburgerButton;
