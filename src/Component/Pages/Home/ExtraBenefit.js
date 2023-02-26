import React from 'react';
import purcentage from '../../../Image/blue-purchase-bag-removebg-preview.png'
import dollar from '../../../Image/dollar.png'
import handshake from '../../../Image/handshake.png'

const ExtraBenefit = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-6'>
            <div className='flex items-center  space-x-8 md:space-x-0 justify-center'>
                <img src={purcentage} alt="" className='w-24 mr-4' />
                <h5 className='text-xl font-bold'>No call out fees</h5>
            </div>
            <div className='flex items-center space-x-8 md:space-x-0 justify-center'>
                <img src={dollar} alt="" className='w-24 mr-4' />
                <h5 className='text-xl font-bold'>Senior Discount</h5>
            </div>
            <div className='flex items-center space-x-8 md:space-x-0 justify-center'>
                <img src={handshake} alt="" className='w-24 mr-4' />
                <h5 className='text-xl font-bold'>Price by job</h5>
            </div>
        </div>
    );
};

export default ExtraBenefit;