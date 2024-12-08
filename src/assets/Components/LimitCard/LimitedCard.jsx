import React from 'react';
import ShowCard from '../RunningCard/ShowCard';


const LimitedCard = ({limit}) => {
    return (
        <div className='lg:grid lg:grid-cols-3 border-2 w-11/12 mx-auto p-10 gap-5'>
            {
                limit.map(addCamp => <ShowCard 
                 key={addCamp._id} 
                 addCamp={addCamp}
                 ></ShowCard>)
            }

        </div>
    );
};

export default LimitedCard;