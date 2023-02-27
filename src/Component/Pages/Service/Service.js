import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    AOS.init({ duration: 1000 })
    const { _id, price, image, rating, serviceName, Info } = service;
    return (
        <div data-aos='zoom-in'>
            <Link href="#" className="group relative block bg-black shadow-xl rounded">
                <img
                    alt="Developer"
                    src={image}
                    className="absolute rounded inset-0 h-full w-full object-cover duration-200 opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className=" font-semibold uppercase tracking-widest text-pink-500">
                        ${price}
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{serviceName}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 duration-200 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className=" text-white">
                                {Info.slice(0, 200)}
                                <span className='text-pink-500 font-semibold'>...See More</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;
