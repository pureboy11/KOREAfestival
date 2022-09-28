import { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed text-slate-500 z-30 flex items-center cursor-pointer right-10 top-6"
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
        className={`top-0 right-0 w-[35vw] bg-blue-600  p-7 pl-10 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-5 text-4xl font-semibold text-white">
          Festival Manager
        </h3>

        <div className="border border-white grid grid-cols-4 m-5 ">
          <div className="flex flex-auto bg-yellow-300 gap-2 mr-1 text-center">
            <h2 className="font-extrabold border border-slate-800 p-5">
              Music Festival
            </h2>
          </div>
          <div className="flex flex-auto bg-yellow-300 gap-2 mr-1 text-center">
            <h2 className="font-extrabold border border-slate-800 p-5">
              Local Festival
            </h2>
          </div>
          <div className="flex flex-auto bg-yellow-300 gap-2 mr-1 text-center">
            <h2 className="font-extrabold border border-slate-800 p-5">
              Food Festival
            </h2>
          </div>
          <div className="flex flex-auto bg-yellow-300 gap-2 text-center">
            <h2 className="font-extrabold border border-slate-800 p-5">
              Activity Festival
            </h2>
          </div>
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
