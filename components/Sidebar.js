import { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-4 top-4 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed text-slate-500 z-30 flex items-center cursor-pointer right-4 top-4"
          viewBox="0 0 100 80"
          width="24"
          height="24"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[50vw] bg-gray-400 p-2  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-7 text-md font-semibold pl-1 mb-5">User ID 님</h3>

        <div className="grid grid-cols-4  text-[10px]">
          <button className="border border-slate-300 rounded-md bg-green-500 p-1 mr-1 mx-auto">
            Music Festival
          </button>
          <button className="border border-slate-300 rounded-md bg-green-500 p-1 mr-1 mx-auto">
            Local Festival
          </button>
          <button className="border border-slate-300 rounded-md bg-green-500 p-1 mr-1 mx-auto">
            Food Festival
          </button>
          <button className="border border-slate-300 rounded-md bg-green-500 p-1 mr-1 mx-auto">
            Activity Festival
          </button>
        </div>
        <div className=" h-60 m-5 justify-center items-center flex flex-wrap">
          <button className="bg-green-300 w-full p-4 text-center my-3">
            01
          </button>
          <button className="bg-green-300 w-full p-4 text-center my-3">
            02
          </button>
          <button className="bg-green-300 w-full p-4 text-center my-3">
            03
          </button>
          <button className="bg-green-300 w-full p-4 text-center my-3">
            04
          </button>
          <button className="bg-green-300 w-full p-4 text-center my-3">
            05
          </button>
          <button className="bg-green-300 w-full p-4 text-center my-3">
            06
          </button>
        </div>
      </div>
    </>
  );
}
