import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {

    const detailsData = useLoaderData();
    console.log(detailsData);

    const { _id, photo, campaignTitle, campaingType,
        donationAmount, userName, userEmail, deadLine, description } = detailsData;

    return (
        <div className='max-w-6xl mx-auto py-10  px-10'>
            <div className='space-y-4 lg:flex lg:justify-between gap-8 p-10 border-2 rounded-xl 
            '>
                <div>
                    <img
                        className='rounded-xl w-full h-full'
                        src={photo} />
                </div>
                <div className='lg:w-[700px]'>
                    <h3 className='text-3xl font-bold'>{campaignTitle}</h3>
                    <div className='space-y-5 mt-5 text-2xl text-gray-600'>
                        <p>Type: {campaingType}</p>
                        <p>Donate: {donationAmount} Tk.</p>
                        <p>User name:  {userName}</p>
                        <p>Email: {userEmail}</p>
                        <p>Date {deadLine}</p>
                        <p>Description: {description}</p>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default DetailsPage;