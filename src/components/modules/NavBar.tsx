import React, { useState } from "react";
import menu from "../../../public/hamburger-menu.svg";
import close from "../../../public/close.png";
import { IconBase, IconName } from "../ui/IconBase";
import Heading from "../ui/Typography/Heading";
import Paragraph from "../ui/Typography/Paragraph";
import { Link } from "../ui/Link";
import { Button } from "../ui/Button";
import Image from "next/image";

const LINKS = ["Home", "Services", "Feature", "Product", "FAQ"];

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-row gap-5 items-center justify-between py-8 relative">
      <div className="flex flex-row gap-2 items-center">
        <IconBase icon={IconName.LogoIcon} />
        <Heading variant="bold" as="h3">
          Nexcent
        </Heading>
      </div>
      <div className="hidden lg:flex flex-row gap-10 items-center">
        {LINKS.map((link) => (
          <Paragraph key={link} variant="regular" size="md">
            {link}
          </Paragraph>
        ))}
      </div>
      <div className="hidden sm:flex flex-row gap-8 items-center">
        <Link text="Login" size="sm" />
        <Button kind="primary" onClick={() => {}} size="sm" text="Sign up" />
      </div>
      <button
        id="menu-toggle"
        className="sm:hidden inline-flex items-center justify-center py-2 focus:outline-none"
        onClick={async () => {
          const menuContent = document.getElementById(
            "menu-content"
          ) as HTMLDivElement;
          setIsOpened((s) => !s);
          if (menuContent.classList.contains("max-h-0")) {
            menuContent.classList.remove("max-h-0");
            menuContent.classList.add("max-h-screen");
          } else {
            menuContent.classList.remove("max-h-screen");
            menuContent.classList.add("max-h-0");
          }
        }}
      >
        {isOpened ? (
          <Image src={close} alt="CloseMenu" width={30} height={30} />
        ) : (
          <Image src={menu} alt="NavManu" width={25} height={25} />
        )}
      </button>

      <div
        id="menu-content"
        className="max-h-0 overflow-hidden absolute top-[105px] left-0 right-0 rounded-xl shadow-shade-100 bg-slate-50 w-full md:hidden transition-all duration-300 ease-in-out"
      >
        <ul className="space-y-2">
          {LINKS.map((menuItem) => (
            <li key={menuItem}>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
              >
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
