import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ServiceHome = ({ service }) => {
    AOS.init({ duration: 1000 })
    const { _id, price, image, rating, serviceName, Info } = service;
    return (
        <div data-aos='zoom-in'>
            <Link href="#" class="group relative block bg-black shadow-xl rounded">
                <img
                    alt="Developer"
                    src={image}
                    class="absolute rounded inset-0 h-full w-full object-cover duration-200 opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class=" font-semibold uppercase tracking-widest text-pink-500">
                        ${price}
                    </p>

                    <p class="text-xl font-bold text-white sm:text-2xl">{serviceName}</p>

                    <div class="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            class="translate-y-8 duration-200 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p class=" text-white">
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

export default ServiceHome;