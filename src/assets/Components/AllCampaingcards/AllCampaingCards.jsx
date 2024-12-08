import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaingCardShow from './AllCampaingCardShow';

const AllCampaingCards = () => {
    const allCampaingCard = useLoaderData();

    return (
        <div>
            <div>
                {
                    allCampaingCard.map(allCard => <AllCampaingCardShow 
                    kye={allCard._id}
                    allCard={allCard}
                    >
                    </AllCampaingCardShow>)
                }
            </div>
        </div>
    );
};

export default AllCampaingCards;