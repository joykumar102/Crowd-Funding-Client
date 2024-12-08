import React, { useState } from 'react';
import AllCampaingCards from '../assets/Components/AllCampaingcards/AllCampaingCards';
import { useLoaderData } from 'react-router-dom';

const AllCampaign = () => {

    const [sort, setSort] = useState([]);

    const sotrData = useLoaderData();

    const [reviewdata, setReviewData] = useState(sotrData);
    console.log(reviewdata);

    const handleSort = sortType => {
        setSort(sortType);
        if(sortType === 'Amount'){
            const remaining = [...reviewdata].sort((a,b)=> b.donationAmount - a.donationAmount);
            setReviewData(remaining)
        }
       
    };

    return (
        <div className='max-w-6xl mx-auto px-10 py-10'>
           <div className='flex justify-between'>
            <h3 className='text-3xl font-bold'>All Campaing</h3>
            <button onClick={() => handleSort('Amount')} className='btn text-white hover:bg-gray-700 bg-gradient-to-r from-blue-700  to-pink-300'>Sort Amount</button>
           </div>
            <AllCampaingCards reviewdata={reviewdata}></AllCampaingCards>
        </div>
    );
};

export default AllCampaign;