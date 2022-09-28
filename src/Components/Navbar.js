import React, { useState } from 'react'

const Navbar = () => {
  const [modal, setModal] = useState(false)
  return (

    <div>
      <div className='flex justify-between md:items-center shadow-lg h-20'>
        <div className='md:flex md:items-center '>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAB4CAMAAAAZmFYpAAAAzFBMVEX////i6uzK3N4Leb8AV2cba3gYaHgYa3RNg5AFZHPu9PUAX2qRs7n///0AbLnT5PA5icQAdb00g8FXk8mnyuEAcbz2kx4Jer3a7fbz9/v3nj33qVP2kRX0jAD2iQA2gsO80NJjkpo0bHhDfIhQjZeiwMU+d393paqqxseHr7L/+v9QjJAlaHsAUGIAWm8ydINZhoz9+e/3uHL2n0r72bP806n74MH779/75tG21u76xY/0vH9moMukx+b5sGtOlsZ3rNIAYbXq69/x6uk3Q3IkAAADBklEQVRoge2Ye1faMBiHE0JaG5ZCgbb0hjDHFFS2MrVeUBC//3fam1LRbVLP0WR/vY96eiqcPP3lnhKCIAiCIAiCIAiCIAiCfAwpTRRa55N1H3/CuZ/6J/qgjhBBa4m06lSM0firUwc/mlIy0xUW2kl8azo2t7n1NvAJ501roq8PSfHdsTi3HFXym1gOWO3WRF/PPW5Bsc74ZG9DNqbcgbBNKmdalFI0bShuUvsleuqccWeqq+M2zm17flL7VJKIH1C/P7UpIeXBe40kG1D7upSzxtyeT+unH/gRDrcO9KXkrS/1Ex78Cm7ZB7oG5rvK0vkflXkJVKxBpazmwIokBpKZUaXqLK8KjtMgDeLcZMVWy9XOCsogjXOTKWUuJbTdrug4y7LUcMpFHP+KL7b1C/+M48urwnD3SbI0zS5393F2TchNZHSQJNB4oMxvF4u7u4IEdxB3KcymrJTxMBsOr0lB7nvtQzMpZbUAJ0GaZVeghMEBymjpsvDQTMrnzVySZg8FlP0wDIILSVZuyLyuMJGSFA9AUkDKC5jEpSyCpJCR7HiMMVPKLM3SYSEvCyKWfSi7yKNVm3RZGBpTQrcJQElIn7l9ItZk0Hlsk44XmksJHTW4lbLdeWR+n0TdXui5SmmwYtPhooAilUMpO37ITCtj6J/3lPRY6JVKcO2U2selpbaLeU7aK3dAetB4pZLtlOFhVI1LfXsfZ6w2VGvm+YOXlH8qaeuMn2rcVPI5JZT5HtuvHMMh4kiXkp6rExAd+GG4P6UKyY+1HTNPLX7WHFHGtsp/29JTSjh8jbSdphuQoDUagKJSblOGLz0WlGWD6wIOtLbzOiWotynDl0FCm/Ox0Hd6l5IeQ0rf93w1SFzfd9Xs4/s+THhd1/N9SGlN/tr6fVZKqBBrYCnkvbrcyPJ2PZDlZQ1TgeY3FGp5jnIhNhtKxUY8qeuT+oNbYJMbevEDiyOEgZUSLrBgwhPIp/IW7on2FzHlLqTaiEjyvIvdXSqjkddNCIIgCIIgCIIgCIIgyEf4DSN5Vr6ZukLAAAAAAElFTkSuQmCC"
            alt="dashboard"
            className='w-20 h-20 md:ml-4' />
          <span className="hidden md:block  text-2xl font-bold">Dashboard</span>
        </div>
        <div className='flex'>
          <div className='hidden md:flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-5" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <p className="mr-10 hover:text-gray-900">User name</p>
          </div>
          <button onClick={() => setModal(!modal)} className=" border-0 rounded text-base mr-8 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-extrabold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {modal ? (
            <>
              <div className='  p-2 md:p-0 cartsidebar w-44 bg-white absolute  md:right-0  z-50 outline-none  border-0 rounded-lg shadow-lg top-4 right-4'>
                <div className='py-4 md:py-8 flex flex-col justify-center items-center '>
                  <h2 className='font-semibold text-xl mb-2'>Profile</h2>
                  <h2 className='font-semibold text-xl'>Logout</h2>
                  <button className='absolute right-4 top-3' onClick={() => setModal(!modal)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>


              </div>
              <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>

      </div>
    </div>
    // <div>
    //   <header className="text-gray-600 body-font shadow-md">
    //     <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center">
    //       <a className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white bg-blue-500 rounded-full" viewBox="0 0 24 24">
    //           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //         </svg>
    //         <span className="hidden md:block ml-10 text-xl m">Dashboard</span>
    //       </a>

    //         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-5" viewBox="0 0 24 24">
    //             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //           </svg>

    //           <p className="mr-20 hover:text-gray-900">User name</p>
    //         </nav>
    //         <button onClick={() => setModal(!modal)} className="md:inline-flex md:items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //           </svg>
    //         </button>

    //       {modal ? (
    //         <>
    //           <div className=' w-auto p-2 md:p-0 cartsidebar   md:w-44 bg-white absolute  md:right-0  z-50 outline-none  border-0 rounded-lg shadow-lg top-4 right-4'>
    //             <div className='py-4 md:py-8 flex flex-col justify-center items-center '>
    //               <h2 className='font-semibold text-xl mb-2'>Profile</h2>
    //               <h2 className='font-semibold text-xl'>Logout</h2>
    //               <button className='absolute right-4 top-3' onClick={() => setModal(!modal)} >
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ">
    //                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //                 </svg>
    //               </button>
    //             </div>


    //           </div>
    //           <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    //         </>
    //       ) : null}
    //     </div>
    //   </header>
    // </div>
  )
}

export default Navbar