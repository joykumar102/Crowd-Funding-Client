import React from 'react';

const DonationShow = ({donate}) => {

    const {photo, campaignTitle, campaingType, 
        donationAmount, userName, userEmail, deadLine, description} = donate;


    return (
        <div className=''>  
            <div className=''>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    className='w-full'
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-xl text-gray-700">
                    <h2 className="card-title text-2xl font-bold">{campaignTitle}</h2>
                    <p>Type: {campaingType}</p>
                    <p>Donation: {donationAmount} TK.</p>
                    <p>Description: {description}</p>
                    <p>DeadLine: {deadLine}</p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default DonationShow;