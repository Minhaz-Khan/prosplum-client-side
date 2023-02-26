import React from 'react';
import bannerImg from '../../../Image/istockphoto-1204813771-612x612.jpg'
import './Home.css'
import ExtraBenefit from './ExtraBenefit';
import { useLoaderData } from 'react-router-dom';
import ServiceHome from './ServicesHome/ServiceHome';
import bgImage from '../../../Image/bannerbg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    AOS.init({ duration: 1000 })
    const services = useLoaderData();

    return (
        <div className='bannerBg' >
            <div className="container px-6 py-10 mx-auto">
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
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto' >

                    <ExtraBenefit></ExtraBenefit>
                </div>
            </div>
            <div className='container mx-auto py-10'>
                <h4 className='text-sm text-blue-600 font-medium text-center uppercase'>our services</h4>
                <h2 className='text-5xl font-medium text-center py-2'>Best Service We Offer</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {services && services.map(service => <ServiceHome key={service._id} service={service}></ServiceHome>)}
                </div>
            </div>
        </div>
    );
};

export default Home;