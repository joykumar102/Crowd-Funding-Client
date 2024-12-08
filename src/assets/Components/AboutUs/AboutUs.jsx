import React from 'react';

const AboutUs = () => {
    return (
        <div className='lg:flex lg:justify-between gap-8 p-10 border-2 rounded-xl 
        w-11/12 mx-auto space-y-4'>
            <div>
                <img
                    className='rounded-xl w-full h-full'
                    src="https://i.ibb.co.com/gvbLW6X/crowdfunding-promotion-crowdfunding-campaign-promote-kickstarter-fundraising.webp" alt="" />
            </div>
            <div className='lg:w-[500px] space-y-4'>
                <h3 className='text-3xl font-bold'>About Us</h3>
                <p className='text-xl'>Welcome to our Crowdfunding Platform, a community-driven initiative where ideas come to life, dreams are realized, and challenges are conquered through the power of collective support.
                    We believe that every individual, idea, and cause has the potential to make a significant impact when given the right resources. Our mission is to bridge the gap between aspirations and reality by connecting passionate individuals with a community that cares.</p>
            </div>

        </div>
    );
};

export default AboutUs;