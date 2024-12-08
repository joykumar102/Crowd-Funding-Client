import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCard from './ShowCard';

const Cards = () => {

    const addCampaings = useLoaderData();
    return (
        <div className='lg:grid lg:grid-cols-3 border-2 w-11/12 mx-auto p-10 gap-5'>
            {
                addCampaings.map(addCamp => <ShowCard 
                 key={addCamp._id} 
                 addCamp={addCamp}
                 ></ShowCard>)
            }

        </div>
    );
};

export default Cards;