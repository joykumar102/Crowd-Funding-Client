import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaingCardShow from './AllCampaingCardShow';

const AllCampaingCards = ({reviewdata}) => {
    
    const allCampaingCard = useLoaderData();
   
    return (
        <div>
            <div>
                {
                    reviewdata.map(allCard => <AllCampaingCardShow 
                    kye={allCard._id}
                    allCard={allCard}
                    
                    >
                    </AllCampaingCardShow>)
                }
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