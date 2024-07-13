import Image from "next/image";

export default function Page() {
  return (
    <>
    <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Trofiplast</span>
                <img className="h-20 w-auto rounded-full" src="trofiplast_logo.png" alt="Trofiplast logo" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">About</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Search the database</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contribute new entries</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>
          {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          <div className="lg:hidden" role="dialog" aria-modal="true">
         {/*    <!-- Background backdrop, show/hide based on slide-over state. --> */}
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Trofiplast</span>
                  <img className="h-8 w-auto" src="trofiplast_logo.png" alt="" />
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Search the database</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contribute new entries</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

       {/*  Hero section */}

        <div className="relative isolate px-6 pt-20 lg:px-8">
          <div className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        {/* color transitions */}
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#298F14] to-[#FDF8FC] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /*  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" */></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative top-8">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              plastic ingestion by animals <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Trofiplast</h1>
              <p className="mt-10 text-lg leading-8 text-gray-600">A worldwide database of ingested plastics in animals</p>
             {/*  action buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              {/* color transitions */}
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FDF8FC] to-[#298F14] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" /* style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" */></div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-36">
        <Image
          src="/trofiplast_logo.png"
          width={330}
          height={330}
          alt="Trofiplast logo"
        ></Image>
        </div>


          <div className="flex flex-col items-center">

              <p className="mb-6 text-lg leading-10 text-gray-600  w-1/2  text-justify">
              TROFIPLAST is a web-based database offering an open online library of worldwide 
              records of anthropogenic debris ingested by biota. It includes the species affected,
               the area and the year where it was found, as well as the reference where the information was recorded. 
              </p>

              <p className="my-6 text-lg leading-10 text-gray-600 w-1/2  text-justify">
              Trofiplast is structured according to three general categories where biota regularly inhabits: seawater, 
               freshwater, and land. A separate category includes laboratory experiments.
              </p>

              <p className="my-6 text-lg leading-10 text-gray-600 w-1/2  text-justify">
                The web-database has been developed by Archipelagos, ambiente e sviluppo, Italia and Archipelagos - environment and development, 
                organizations under the project “Anthropogenic debris impacts on marine biota and its environment”. 
                This web application has been developed as a voluntary work of the organization members.
              </p>
              
              <p className="my-6 text-lg leading-10 text-gray-600 w-1/2  text-justify">Cited TROFIPLAST web-based database as:
              </p>
              <p className="my-6 text-lg leading-10 text-gray-600 w-1/2  text-justify">
              Hernandez-Milian, G., Martinez-Calcaño, I., Panou, A. and Bundone, L. 2022. 
              TROFIPLAST: a web-database environment for the worldwide anthropogenic debris ingestion records by biota. Archipelagos, ambiente e sviluppo (Italy) and Archipelagos -environment & development (Greece). November 2022. https://trofiplast.calmartiportfolio.com
              </p>

              <div className="mt-32 flex items-center justify-center gap-x-6  text-justify">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-justify">Learn more about Archipelagos ambiente e sviluppo<span aria-hidden="true">→</span></a>
              </div>

          </div>



        <div className="flex justify-center items-center py-24">
        <Image
          src="/archipelagos_logo.png"
          width={300}
          height={300}
          alt="Archipelagos logo"
          className="pb-36"
        ></Image>

        </div>

      </div>




    </>
  );
}

  {/*     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main> */}


{/*       <div classNameName="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}



{/*       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>     

      </div> */}

