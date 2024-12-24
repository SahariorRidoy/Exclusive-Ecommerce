import React from 'react';
import delivery from '../../../assets/Services.png';
import customer from '../../../assets/Services (customer).png';
import moneyback from '../../../assets/Services (guarantee).png'
import backTop from '../../../assets/Up Arrow.png'
const Services = () => {
    return (
        <div className="max-w-[1170px] mx-auto mt-32 ">
            <div className='flex justify-center gap-24 mb-16'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={delivery} alt="" />
                    <h4 className='font-semibold text-xl mt-6 mb-2'>FREE AND FAST DELIVERY</h4>
                    <p className='text-sm'>Free delivery for all orders over $140</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={customer} alt="" />
                    <h4 className='font-semibold text-xl mt-6 mb-2'>24/7 CUSTOMER SERVICE</h4>
                    <p className='text-sm'>Friendly 24/7 customer support</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={moneyback} alt="" />
                    <h4 className='font-semibold text-xl mt-6 mb-2'>MONEY BACK GUARANTEE</h4>
                    <p className='text-sm'>We reurn money within 30 days</p>
                </div>
            </div>
            <div className='flex justify-end mb-8'>
            <button className='btn px-0'>
            <img  src={backTop} alt="" />
            </button>
            </div>
        </div>
    );
};

export default Services;