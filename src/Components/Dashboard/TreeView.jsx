import React, { useState } from "react";

const TreeView = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-full  w-full border-r text-white border-white bg-black pt-2">

      {show ? <>
        <button onClick={() => { setShow(!show) }} className="text-white bg-black hover:bg-slate-900  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:black " type="button">
          Tree view
          <svg
            className="ml-2 w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7">
            </path>
          </svg>
        </button>
        <div className=" ml-5 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-black" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" >
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
              <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Launches</p>
            </li>
            <li>
              <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LaunchPad</p>
            </li>

          </ul>
        </div>
      </> : <><button onClick={() => { setShow(!show) }} className="text-white bg-black hover:bg-slate-900 w-full font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:black border-b border-white " type="button">Tree view<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      </button>
      </>}



    </div>
  )
}

export default TreeView