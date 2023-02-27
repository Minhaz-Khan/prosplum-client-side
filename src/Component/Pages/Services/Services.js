import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='container mx-auto'>
            <h5 className='text-center text-sm font-bold text-blue-600 mt-6'>OUR SERVICES</h5>
            <h2 className='text-center text-5xl font-bold mt-2'>Our Plumming Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {services.map(service => <Service key={service._id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;