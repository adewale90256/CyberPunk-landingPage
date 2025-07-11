import React from "react";

function Header() {
  return (
    <div className=" px-5 mt-2 h-fit border-b-1 py-3">
      <header className=" flex justify-between items-center">
        <div className="flex items-center justify-center gap-4">
          <div>
            <h2 className="bg-blue-900 text-white w-fit p-2 font-bold rounded shadow-lg transition-all duration-300 hover:scale-105">
              Cyber<span className="text-blue-500">Punk</span>
            </h2>
          </div>
        </div>
        <div>
          <img src="/images/logo.png" alt="" className="size-20" />
        </div>
      </header>

      <div className="mt-10">
        <img
          src="/images/priva.png"
          className="w-[100%] h-[100%] cover"
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Header;
