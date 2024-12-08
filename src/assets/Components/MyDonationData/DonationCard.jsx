import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationShow from './DonationShow';

const DonationCard = () => {

    const donationCard = useLoaderData();

    return (
        <div>
           

            <div  className='lg:grid lg:grid-cols-3 space-y-5 border-2 w-11/12 mx-auto p-10 gap-10'>
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