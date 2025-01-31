import React, { FC, useEffect, useState } from "react";
import { styled } from "linaria/react";
import Link from "next/link";
import Image from "next/image";

import { media, tm } from "../themes";
import logo from "../assets/hardhat-logo.svg";
import Hamburger from "./ui/Hamburger";
import MobileMenu from "./ui/MobileMenu";
import DesktopMenu from "./ui/DesktopMenu";
import { menuItemsList, socialsItems } from "../config";

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
  box-sizing: border-box;
  padding: 32px 24px;
  transition: all ease-in-out 0.5s;
  background-color: ${tm(({ colors }) => colors.neutral0)};
  z-index: 10;
  ${media.md} {
    padding: 24px 0;
  }
`;

const ControlsContainer = styled.section`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${tm(({ colors }) => colors.transparent)};
  box-sizing: border-box;
  max-width: 960px;
`;

const LogoContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  box-sizing: border-box;
  background-color: ${tm(({ colors }) => colors.transparent)};
  border: none;
  cursor: pointer;
`;

const LandingNavigation: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;

    if (isMobileMenuOpen) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <Navigation>
      <ControlsContainer>
        <Link href="/" passHref>
          <LogoContainer aria-label="home page">
            <Image src={logo} alt="logo" />
          </LogoContainer>
        </Link>
        <Hamburger
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <DesktopMenu menuItems={menuItemsList} socialsItems={socialsItems} />
      </ControlsContainer>

      <MobileMenu
        menuItems={menuItemsList}
        socialsItems={socialsItems}
        isOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      />
    </Navigation>
  );
};

export default LandingNavigation;
