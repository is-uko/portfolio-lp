import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={
          isOpen
            ? "fixed w-screen h-screen bg-red-600 duration-500 z-20"
            : "fixed w-screen h-screen bg-red-600 bg-opacity-0 pointer-events-none duration-500 z-20 dark:bg-opacity-0"
        }
      >
        <nav
          className={
            isOpen
              ? "text-white text-center pt-16 duration-500"
              : "text-white text-center pt-16 opacity-0 duration-500"
          }
        >
          <ul className="pb-10">
            <li className="pb-5">BBBが選ばれる理由</li>
            <li className="pb-5">受講生の声</li>
            <li>スクールの概要</li>
          </ul>
          <button className="relative px-12 py-3 border-2 border-black after:absolute after:-bottom-2 after:-right-2 after:w-60 after:h-12 after:border-b-2 after:border-r-2 after:border-black hover:bg-black hover:text-red-600 duration-500">
            無料体験に申し込む
          </button>
        </nav>
      </div>
      <div className="flex justify-between">
        <Image
          className="h-14 mt-5 mb-5 z-20"
          src={isOpen ? "img/logo-w.svg" : "img/logo-r.svg"}
          alt=""
          width={150}
          height={150}
        ></Image>
        <button
          className={
            isOpen
              ? "relative h-24 w-24 bg-red-600 duration-500 z-20"
              : "relative h-24 w-24 bg-red-600 hover:bg-red-800 duration-500 z-20"
          }
          onClick={handleClick}
        >
          <span
            className={
              isOpen
                ? "absolute top-8 left-6 h-[2px] w-12 bg-black translate-y-3.5 rotate-45 duration-500 z-20"
                : "absolute top-8 left-6 h-[2px] w-12 bg-black z-20 duration-500"
            }
          ></span>
          <span
            className={
              isOpen
                ? "top-8 left-6 h-[2px] w-12 bg-red-600 translate-y-3.5 rotate-45 duration-500 z-20"
                : "absolute top-12 left-6 h-[2px] w-12 bg-black z-20 duration-500"
            }
          ></span>
          <span
            className={
              isOpen
                ? "absolute top-8 left-6 h-[2px] w-12 bg-black translate-y-3.5 -rotate-45 duration-500 z-20"
                : "absolute top-16 left-6 h-[2px] w-12 bg-black z-20 duration-500"
            }
          ></span>
        </button>
      </div>
    </div>
  );
}
