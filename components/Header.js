import Darkmode from "./darkmode";
import { useState } from "react";
import Link from "next/link";

export default function Header(props) {
  const [festivalSearch, setFestivalSearch] = useState();
  const onChange = (e) => {
    setFestivalSearch(e.target.value);
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-5 pt-5 items-center md:mb-3">
          <Link href="/" as={"/"}>
            <a className="text-xl font-bold sm:text-3xl mb-2 md:mb-0 mr-5 flex">
              <div className="bg-green-300 w-10 h-10 rounded-full"></div>
              <h1 className="text-xl font-extrabold tracking-tighter text-green-900/80 hover:text-slate-800 my-auto ml-1">
                오축
              </h1>
            </a>
          </Link>
          <input
            onChange={onChange}
            id="festivalInput"
            className="w-50 md:ml-2 md:w-[600px] bg-gray-100 dark:bg-gray-700 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="ex. 뮤직페스티벌"
          ></input>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <Link href="/festival">
              <a className="mr-5 hover:text-gray-900">이주의 축제</a>
            </Link>
            <Link href="/mint">
            <a className="mr-5 hover:text-gray-900">전체 보기</a>
            </Link>
            <Link href="/setting">
            <a className=" hover:text-gray-900">검색</a>
            </Link> */}
            <div className="-translate-x-[190px] -translate-y-[148px] md:translate-x-0 md:translate-y-0 md:pl-5">
              {/* <Darkmode /> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
