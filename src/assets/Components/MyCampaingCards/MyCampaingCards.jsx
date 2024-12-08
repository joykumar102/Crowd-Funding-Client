import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyShowCard from './MyShowCard';

const MyCampaingCards = () => {

    const lodedMyCampaignCadrs = useLoaderData();
    const [myCampaignCadrs, setMyCampaignCadrs] = useState(lodedMyCampaignCadrs);


    return (

        <div>
            <div className=' border-2 w-11/12 mx-auto p-10 gap-5'>
                {
                    myCampaignCadrs.map(myCard => <MyShowCard
                        kye={myCard._id}
                        myCard={myCard}
                        myCampaignCadrs={myCampaignCadrs}
                        setMyCampaignCadrs={setMyCampaignCadrs}
                    >

                    </MyShowCard>)
                }
            </div>
        </div>
    );
};

export default MyCampaingCards;
