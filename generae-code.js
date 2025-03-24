
const generateSectionCode = (section) => {
    switch (section) {

        case "Header":
            return `
  "use client";
  import React from 'react';
  
  const Header = () => {
    return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
    );
  };
  
  export default Header;
        `;

        case "HeroSection":
            return `
  "use client";
  import React from 'react';
  
  const HeroSection = () => {
    return (
      <section className="relatve">
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
        <h1 className="mb-4 text-4xl font-semibold md:text-6xl">The Website You Want Without The <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">Dev Time</span>.</h1>
        <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
        <!-- Button Wrap -->
        <div className="flex justify-center">
          <a href="#" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">Get Started</a>
          <a href="#" className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg" alt="" className="mr-2 inline-block w-6" />
            <p className="text-black">View Showreel</p>
          </a>
        </div>
      </div>
      <div className="relative mx-auto h-[512px]">
        <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d247ab06a755ee4aaee_magicpattern-KfFmwa7m5VQ-unsplash.jpg" alt="" className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl" />
        <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
      </div>
    </div>
    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block" />
  </section>
    );
  };
  
  export default HeroSection;
        `;

        case "FeatureSection":
            return `
        "use client";
  import React from 'react';
  
  const FeaturesSection = () => {
    return (
          <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
                <p className="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
                <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
                <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
                <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
            </div>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Operations</h3>
                <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
            </div>
        </div>
    </div>
  </section>
  );
    }
  
  export default FeaturesSection;
        `
        case "ServiceSection":
            return `
          "use client";
  import React from 'react';
  
  const ServiceSection = () => {
    return (
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
        <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                    decentralized network that combines a smart contract and a frontend user interface.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                    focus on understanding and analyzing data to provide a semantic web.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                    to assess the extent up to which project management standards are being upheld.</p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                    defenses and exploiting weaknesses in a computer system or network.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                    that eliminate a large amount of manual work and accelerate the development process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceSection;
        `


        case "BlogSection":
            return `
          "use client";
  import React from 'react';
  const BlogSection: React.FC = () => {
    return (
      <div className="bg-purple-100 min-h-screen p-4 font-sans">
        <div className="max-w-4xl max-lg:max-w-2xl max-sm:max-w-sm mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-8">Explore Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512">
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path fill="#ff405c" d="M255.997.007c-141.156 0-256 114.844-256 256 0 141.16 114.844 256 256 256 141.16 0 256.004-114.84 256.004-256C512 114.851 397.157.007 255.997.007z" data-original="#ff405c" />
                  <path fill="#d01273" d="M269.845 511.629c110.122-5.9 201.974-81.716 231.869-183.747l-99.461-99.461a12.002 12.002 0 0 0-1.223-1.135l-137.504-110.9a11.994 11.994 0 0 0-15.061 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 3.109 4.757l39.179 39.186v101.722a11.97 11.97 0 0 0 3.796 8.758z" data-original="#d01273" />
                  <path fill="#fff" d="M350.528 224.627c-6.632 0-11.999 5.372-11.999 11.999V374.29h-35.472v-93.423c0-6.627-5.367-11.999-11.999-11.999H220.94c-6.631 0-11.999 5.372-11.999 11.999v93.423h-35.472V236.626c0-6.627-5.372-11.999-11.999-11.999h-8.983l103.509-83.484 103.514 83.484zm50.503 2.659-137.504-110.9a11.992 11.992 0 0 0-15.06 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 11.318 8.006h30.97v137.66c0 6.627 5.372 12.003 12.003 12.003h59.469c6.619 0 11.999-5.376 11.999-12.003v-93.423h46.12v93.423c0 6.627 5.38 12.003 11.999 12.003h59.47c6.631 0 12.003-5.376 12.003-12.003v-137.66h30.97c5.088 0 9.619-3.209 11.318-8.006a12.009 12.009 0 0 0-3.787-13.337z" data-original="#ffffff" />
                </g>
              </svg>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Fresh Insights</h3>
                <p className="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
                <div className="mt-6">
                  <button type="button" className="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                    Explore
                    <div className="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask x="0" y="0" width="18" height="18">
                          <rect width="18" height="18" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_2085_52)">
                          <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <path fill="#54d6c0" d="M23 5.675h-3.3a.825.825 0 0 0-.825.825v14.85a2.475 2.475 0 0 0 4.95 0V6.5A.825.825 0 0 0 23 5.675z" data-original="#54d6c0" />
                  <path fill="#1f95f8" d="M21.735 23.726a.744.744 0 0 1-.385.099H4.3A4.126 4.126 0 0 1 .175 19.7V2.1A1.934 1.934 0 0 1 2.1.175h16.5A1.934 1.934 0 0 1 20.525 2.1v19.943a1.771 1.771 0 0 0 1.21 1.683z" data-original="#1f95f8" />
                  <g fill="#fff" transform="matrix(1.1 0 0 1.1 -1.2 -1.2)">
                    <rect width="5.5" height="5.5" x="4.25" y="4.75" data-original="#ffffff" rx=".75" />
                    <path d="M16 6.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 3h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 4H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5z" data-original="#ffffff" />
                  </g>
                </g>
              </svg>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Trending Now</h3>
                <p className="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
                <div className="mt-6">
                  <button type="button" className="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                    Explore
                    <div className="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask x="0" y="0" width="18" height="18">
                          <rect width="18" height="18" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_2085_52)">
                          <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512">
                <path fill="#64b5f6"
                  d="m0 192 246.528 156.896c2.816 2.08 6.144 3.104 9.472 3.104s6.656-1.024 9.472-3.104L512 192 265.6 3.2a16.032 16.032 0 0 0-19.2 0L0 192z"
                  data-original="#64b5f6" />
                <path fill="#eceff1"
                  d="M416 0H96C78.368 0 64 14.368 64 32v352c0 8.832 7.168 16 16 16h352c8.832 0 16-7.168 16-16V32c0-17.632-14.336-32-32-32z"
                  data-original="#eceff1" />
                <path fill="#90a4ae"
                  d="M144 96h224c8.832 0 16-7.168 16-16s-7.168-16-16-16H144c-8.832 0-16 7.168-16 16s7.168 16 16 16zm224 32H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16zm-96 64H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h128c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                  data-original="#90a4ae" />
                <path fill="#1e88e5"
                  d="M265.472 348.896c-2.816 2.08-6.144 3.104-9.472 3.104s-6.656-1.024-9.472-3.104L0 192v288c0 17.664 14.336 32 32 32h448c17.664 0 32-14.336 32-32V192L265.472 348.896z"
                  data-original="#1e88e5" />
                <path fill="#2196f3"
                  d="M480 512H32c-17.952 0-32-14.048-32-32a16.02 16.02 0 0 1 6.528-12.896l240-160c2.816-2.08 6.144-3.104 9.472-3.104s6.656 1.024 9.472 3.104l240 160A16.02 16.02 0 0 1 512 480c0 17.952-14.048 32-32 32z"
                  data-original="#2196f3" />
              </svg>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Daily Highlights</h3>
                <p className="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
                <div className="mt-6">
                  <button type="button" className="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                    Explore
                    <div className="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask x="0" y="0" width="18" height="18">
                          <rect width="18" height="18" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_2085_52)">
                          <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512">
                <path fill="#64b5f6"
                  d="m0 192 246.528 156.896c2.816 2.08 6.144 3.104 9.472 3.104s6.656-1.024 9.472-3.104L512 192 265.6 3.2a16.032 16.032 0 0 0-19.2 0L0 192z"
                  data-original="#64b5f6" />
                <path fill="#eceff1"
                  d="M416 0H96C78.368 0 64 14.368 64 32v352c0 8.832 7.168 16 16 16h352c8.832 0 16-7.168 16-16V32c0-17.632-14.336-32-32-32z"
                  data-original="#eceff1" />
                <path fill="#90a4ae"
                  d="M144 96h224c8.832 0 16-7.168 16-16s-7.168-16-16-16H144c-8.832 0-16 7.168-16 16s7.168 16 16 16zm224 32H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16zm-96 64H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h128c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                  data-original="#90a4ae" />
                <path fill="#1e88e5"
                  d="M265.472 348.896c-2.816 2.08-6.144 3.104-9.472 3.104s-6.656-1.024-9.472-3.104L0 192v288c0 17.664 14.336 32 32 32h448c17.664 0 32-14.336 32-32V192L265.472 348.896z"
                  data-original="#1e88e5" />
                <path fill="#2196f3"
                  d="M480 512H32c-17.952 0-32-14.048-32-32a16.02 16.02 0 0 1 6.528-12.896l240-160c2.816-2.08 6.144-3.104 9.472-3.104s6.656 1.024 9.472 3.104l240 160A16.02 16.02 0 0 1 512 480c0 17.952-14.048 32-32 32z"
                  data-original="#2196f3" />
              </svg>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Daily Highlights</h3>
                <p className="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
                <div className="mt-6">
                  <button type="button" className="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                    Explore
                    <div className="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask x="0" y="0" width="18" height="18">
                          <rect width="18" height="18" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_2085_52)">
                          <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512">
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path fill="#ff405c" d="M255.997.007c-141.156 0-256 114.844-256 256 0 141.16 114.844 256 256 256 141.16 0 256.004-114.84 256.004-256C512 114.851 397.157.007 255.997.007z" data-original="#ff405c" />
                  <path fill="#d01273" d="M269.845 511.629c110.122-5.9 201.974-81.716 231.869-183.747l-99.461-99.461a12.002 12.002 0 0 0-1.223-1.135l-137.504-110.9a11.994 11.994 0 0 0-15.061 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 3.109 4.757l39.179 39.186v101.722a11.97 11.97 0 0 0 3.796 8.758z" data-original="#d01273" />
                  <path fill="#fff" d="M350.528 224.627c-6.632 0-11.999 5.372-11.999 11.999V374.29h-35.472v-93.423c0-6.627-5.367-11.999-11.999-11.999H220.94c-6.631 0-11.999 5.372-11.999 11.999v93.423h-35.472V236.626c0-6.627-5.372-11.999-11.999-11.999h-8.983l103.509-83.484 103.514 83.484zm50.503 2.659-137.504-110.9a11.992 11.992 0 0 0-15.06 0l-137.5 110.9a12.01 12.01 0 0 0-3.788 13.337 12.008 12.008 0 0 0 11.318 8.006h30.97v137.66c0 6.627 5.372 12.003 12.003 12.003h59.469c6.619 0 11.999-5.376 11.999-12.003v-93.423h46.12v93.423c0 6.627 5.38 12.003 11.999 12.003h59.47c6.631 0 12.003-5.376 12.003-12.003v-137.66h30.97c5.088 0 9.619-3.209 11.318-8.006a12.009 12.009 0 0 0-3.787-13.337z" data-original="#ffffff" />
                </g>
              </svg>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Fresh Insights</h3>
                <p className="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
                <div className="mt-6">
                  <button type="button" className="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                    Explore
                    <div className="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask x="0" y="0" width="18" height="18">
                          <rect width="18" height="18" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_2085_52)">
                          <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <path fill="#54d6c0" d="M23 5.675h-3.3a.825.825 0 0 0-.825.825v14.85a2.475 2.475 0 0 0 4.95 0V6.5A.825.825 0 0 0 23 5.675z" data-original="#54d6c0" />
                  <path fill="#1f95f8" d="M21.735 23.726a.744.744 0 0 1-.385.099H4.3A4.126 4.126 0 0 1 .175 19.7V2.1A1.934 1.934 0 0 1 2.1.175h16.5A1.934 1.934 0 0 1 20.525 2.1v19.943a1.771 1.771 0 0 0 1.21 1.683z" data-original="#1f95f8" />
                  <g fill="#fff" transform="matrix(1.1 0 0 1.1 -1.2 -1.2)">
                    <rect width="5.5" height="5.5" x="4.25" y="4.75" data-original="#ffffff" rx=".75" />
                    <path d="M16 6.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 3h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zm0 4H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 3H5a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5z" data-original="#ffffff" />
                  </g>
                </g>
              </svg>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Trending Now</h3>
                <p className="text-gray-800 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...</p>
                <div className="mt-6">
                  <button type="button" className="flex items-center flex-wrap justify-between gap-2 border rounded-3xl pl-5 pr-3 h-14 w-full hover:bg-purple-100 transition-all duration-300">
                    Explore
                    <div className="w-11 h-11 rounded-full bg-purple-200 flex justify-center items-center">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask x="0" y="0" width="18" height="18">
                          <rect width="18" height="18" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_2085_52)">
                          <path d="M12.1313 9.75H3V8.25H12.1313L7.93125 4.05L9 3L15 9L9 15L7.93125 13.95L12.1313 9.75Z" fill="#222222"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogSection;
        `
        case "TestimonialSection":
            return `
  "use client";
  import React from 'react';
  
  const TestimonialSection = () => {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;
        `;

        case "Footer":
            return `
  "use client";
  import React from 'react';
  
  const FooterSection = () => {
    return (
      
  
  <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                      <a href="#" className=" hover:underline">About</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Careers</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Brand Center</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Blog</a>
                  </li>
              </ul>
          </div>
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Discord Server</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Twitter</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Facebook</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Contact Us</a>
                  </li>
              </ul>
          </div>
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Licensing</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
              </ul>
          </div>
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                      <a href="#" className="hover:underline">iOS</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Android</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">Windows</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="hover:underline">MacOS</a>
                  </li>
              </ul>
          </div>
      </div>
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                          <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                      </svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                          <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                      </svg>
                    <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                      <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                  </svg>
                    <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                  </svg>
                    <span className="sr-only">Dribbble account</span>
                </a>
          </div>
        </div>
      </div>
  </footer>
  
    );
  };
  
  export default FooterSection;
        `;

        default:
            return `
  "use client";
  import React from 'react';
  
  const ${section} = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center">${section}</h2>
        <p className="text-center mt-4">This is the ${section} section.</p>
      </div>
    );
  };
  
  export default ${section};
        `;
    }
};

export default generateSectionCode;