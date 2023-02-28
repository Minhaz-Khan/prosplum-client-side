import React from 'react';

const CTA = () => {
    return (


        <section className="">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Sign Up For Project Updates
                    </h2>

                    <p className="hidden text-gray-500 sm:mt-4 sm:block">
                        Professionally architect front-end data rather than global applications. Dynamically leverage other's effective information for fully researched technology.
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                            <label for="email" className="sr-only">Email</label>

                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium uppercase"> Subscribe </span>

                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default CTA;