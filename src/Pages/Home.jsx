import React from 'react';
import Banner from '../assets/Components/Banner/Banner';
import SectionOne from '../assets/Components/ExtraSection/SectionOne';
import SectionTwo from '../assets/Components/ExtraSection/SectionTwo';
// import Cards from '../assets/Components/RunningCard/Cards';

import TypeScript from '../assets/Components/TypeWriter/TypeScript';
import LimitedCard from '../assets/Components/LimitCard/LimitedCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const limit = useLoaderData();
    return (
        <div>
            <TypeScript></TypeScript>
           <Banner></Banner>
           {/* <Cards></Cards> */}
           <LimitedCard limit={limit}></LimitedCard>
                
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>

        </div>
    );
};

export default Home;