import Image from "next/image";
import NavBar from "@/app/ui/common/navbar";

export default function Page() {
  return (
    <>
    <div className="bg-white">
      
       <NavBar></NavBar>

       {/*  Hero section */}

        <div className="relative isolate px-6 pt-20 lg:px-8">  
                  
          {/* placeholder for the color transition elements */}
 
{/*       <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div> */}

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative top-8">
    {/*     <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              plastic ingestion by animals <a href="#" className="font-semibold text-gray-900"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div> */}

            <div className="text-center">
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl">Trofiplast</h1>
              <p className="mt-10 text-lg leading-8 text-gray-600">A worldwide database of ingested plastics in animals</p>
             {/*  action buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
              {/* color transitions */}
          <div /* className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true" */ >
            <div /* className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FDF8FC] to-[#298F14] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" */ /* style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" */>
            </div>
          </div>
          
        </div>

        <div className="flex justify-center items-center pb-36">
        <Image
          src="/trofiplast_logo.png"
          width={320}
          height={320}
          alt="Trofiplast logo"    
          priority={true}
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
          priority={true}
        ></Image>

        </div>
      </div>
    </>
  );
}



