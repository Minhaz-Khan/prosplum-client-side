import React from 'react';
import bannerImg from '../../../Image/istockphoto-1204813771-612x612.jpg'
import './Home.css'
import ExtraBenefit from './ExtraBenefit';
import { Link, useLoaderData } from 'react-router-dom';
import bgImage from '../../../Image/bannerbg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import CTA from '../CTA/CTA';
const Home = () => {
    AOS.init({ duration: 1000 })
    const services = useLoaderData();

    return (
        <div className='bannerBg' >
            <div className="container px-6 pb-10 pt-14 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2 ">
                        <div className="">
                            <h1 className='text-1 font-semibold text-gray-800 uppercase dark:text-white lg:text-5xl text-5xl'>Emergency Plumbing <br /> <span className='text-blue-500'>solution</span></h1>

                            <p className="text-2 w-2/3 text-gray-600 dark:text-gray-400">Whether you need new plumbing equipment installed or existing plumbing repaired, we're here to help.</p>

                            <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Appoinment</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-3xl" src={bannerImg} alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div className='container mx-auto' >

                    <ExtraBenefit></ExtraBenefit>
                </div>
            </div>
            <div className='container mx-auto py-10'>
                <h4 className='text-sm text-blue-600 font-medium text-center uppercase'>our services</h4>
                <h2 className='text-5xl font-medium text-center py-2'>Best Service We Offer</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 lg:m-10'>
                    {services && services.map(service => <Service key={service._id} service={service}></Service>)}
                </div>
                <Link to={'/services'} className='flex justify-center'>
                    <button className="px-8 py-2 mt-6 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        See All
                    </button>
                </Link>
            </div>
            <div className='container mx-auto'>
                <Testimonials></Testimonials>
                <CTA></CTA>
            </div>
        </div>
    );
};

export default Home;