import React from 'react';
import AllCampaingCards from '../assets/Components/AllCampaingcards/AllCampaingCards';

const AllCampaign = () => {
    return (
        <div className='max-w-6xl mx-auto px-10 py-10'>
           <div className='flex justify-between'>
            <h3 className='text-3xl font-bold'>All Campaing</h3>
            <button className='btn text-white hover:bg-gray-700 bg-gradient-to-r from-blue-700  to-pink-300'>Sort Amount</button>
           </div>
            <AllCampaingCards></AllCampaingCards>
        </div>
    );
};

export default AllCampaign;