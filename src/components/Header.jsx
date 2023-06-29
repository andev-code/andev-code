import React, { Suspense, useContext, useState } from "react";

import MenuDropDown from "../icons/MenuDropDown";
import { Logo } from "../components/Logo";
const HeaderMenu = React.lazy(() => import("../components/HeaderMenu"));

import LanguageContext from "../context/LanguageContext";

export function Header() {
  const { text, handleLanguage } = useContext(LanguageContext);
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="w-full bg-gray-900 flex flex-col transition-all">
        {show && (
          <Suspense>
            <HeaderMenu show={show} />
          </Suspense>
        )}

        <div className="w-full max-w-[1000px] h-12 m-auto px-5 xl:px-0 py-5 flex justify-between items-center">
          <Logo />

          {show ? (
            <MenuDropDown
              onClick={handleMenu}
              className="text-3xl text-gray-100 cursor-pointer md:hidden"
            />
          ) : (
            <MenuDropDown
              onClick={handleMenu}
              className="text-3xl text-gray-100 cursor-pointer md:hidden"
            />
          )}
        </div>
      </header>
    </>
  );
}
