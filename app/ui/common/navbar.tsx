import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Trofiplast</span>
                            <img className="h-20 w-auto rounded-full" src="trofiplast_logo.png" alt="Trofiplast logo" />
                        </a>
                    </div>
            {/*          <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div> */}

                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link href="/" className="text-md font-semibold leading-6 text-gray-900 hover:text-lime-800 group">
                            Home
                            <div className="bg-gray-900 h-[3px] w-0 group-hover:w-full transition-all duration-200"></div>
                        </Link>
                        <Link href="/about" className="text-md font-semibold leading-6 text-gray-900 hover:text-lime-800 group">
                            About
                            <div className="bg-gray-900 h-[3px] w-0 group-hover:w-full transition-all duration-200"></div>
                        </Link>
                        <Link href="/search" className="text-md font-semibold leading-6 text-gray-900 hover:text-lime-800 group">
                            Search the database
                            <div className="bg-gray-900 h-[3px] w-0 group-hover:w-full transition-all duration-200"></div>
                        </Link>
                        <Link href="/contribute" className="text-md font-semibold leading-6 text-gray-900 hover:text-lime-800 group">
                            Contribute new entries
                            <div className="bg-gray-900 h-[3px] w-0 group-hover:w-full transition-all duration-200"></div>
                        </Link>
                        <Link href="/contact" className="text-md font-semibold leading-6 text-gray-900 hover:text-lime-800 group">
                            Contact
                            <div className="bg-gray-900 h-[3px] w-0 group-hover:w-full transition-all duration-200"></div>
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="true"></span></a>
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
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
        </>
    )
}