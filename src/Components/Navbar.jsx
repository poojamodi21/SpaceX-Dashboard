import React, { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="w-full bg-black border-b border-white">
      <div className="flex max-w-[1440px] px-10 mx-auto justify-between bg-black items-center shadow-lg h-20">
        <p className="text-white text-2xl font-bold">SpaceX</p>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 hidden md:block text-white cursor-pointer font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-white hidden pr-12 pl-2 md:block">User name</p>
          <svg
            onClick={() => setModal(!modal)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white cursor-pointer font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {modal ? (
        <>
          <div className="p-2 md:p-0 cartsidebar w-44 bg-black border border-white absolute md:right-0 z-50 outline-none rounded-lg shadow-lg top-4 right-4">
            <div className="py-4 md:py-8 flex flex-col justify-center items-center ">
              <h2 className="font-semibold text-xl text-white mb-2">Profile</h2>
              <h2 className="font-semibold text-xl text-white">Logout</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setModal(!modal)}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-4 top-3 cursor-pointer text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={() => setModal(!modal)}
            className="opacity-40 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
