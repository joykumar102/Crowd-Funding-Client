import React from 'react';
import Banner from '../assets/Components/Banner/Banner';
import SectionOne from '../assets/Components/ExtraSection/SectionOne';
import SectionTwo from '../assets/Components/ExtraSection/SectionTwo';
import Cards from '../assets/Components/RunningCard/Cards';

import TypeScript from '../assets/Components/TypeWriter/TypeScript';

const Home = () => {
    return (
        <div>
            <TypeScript></TypeScript>
           <Banner></Banner>
           <Cards></Cards>
                
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>

        </div>
    );
};

export default Home;