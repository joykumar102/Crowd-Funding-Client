import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({addCamp}) => {

    const {_id, photo, campaignTitle, campaingType, 
        donationAmount, userName, userEmail, deadLine, description} = addCamp;
    return (
        <div className='space-y-5'>
              <div className="card bg-base-100  shadow-xl ">
                <figure>
                    <img
                    className='w-full'
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{campaignTitle}</h2>
                    <p>CampaingType: {campaingType}</p>
                    <p>DeadLine: {deadLine}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/DetailsHome/${_id}`}> <button className="btn hover:bg-red-400 bg-gradient-to-r from-blue-700  to-pink-300 text-white">See More</button></Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;