import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationShow from './DonationShow';

const DonationCard = () => {

    const donationCard = useLoaderData();

    return (
        <div>
           

            <div  className='lg:grid lg:grid-cols-3  lg:w-11/12 mx-auto px-5 gap-10'>
            {
                donationCard.map(donate => <DonationShow 
                key={donate._id}
                donate={donate}
                >

                </DonationShow>)
            }

            </div>
        </div>
    );
};

export default DonationCard;