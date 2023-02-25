import React from 'react';
import purcentage from '../../../Image/blue-purchase-bag-removebg-preview.png'
import dollar from '../../../Image/dollar.png'
import handshake from '../../../Image/handshake.png'

const ExtraBenefit = () => {
    return (
        <div className='flex justify-around bg-slate-100 py-6'>
            <div className='flex items-center '>
                <img src={purcentage} alt="" className='w-24 mr-4' />
                <h5 className='text-2xl'>No call out fees</h5>
            </div>
            <div className='flex items-center'>
                <img src={dollar} alt="" className='w-24 mr-4' />
                <h5 className='text-2xl'>Senior Discount</h5>
            </div>
            <div className='flex items-center'>
                <img src={handshake} alt="" className='w-24 mr-4' />
                <h5 className='text-2xl'>Price by job</h5>
            </div>
        </div>
    );
};

export default ExtraBenefit;