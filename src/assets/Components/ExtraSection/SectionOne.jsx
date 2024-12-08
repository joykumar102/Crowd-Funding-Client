import React from 'react';

const SectionOne = () => {
    return (
        <div className='mx-auto mt-10 py-10 px-10  space-y-8 bg-gray-500'>
        <h2 className='text-4xl text-center text-gray-600 font-bold'>How Crowdfunding Works</h2>
        <p className='text-xl text-center px-10'>Crowdfunding is a way to raise money for a specific cause or project by gathering small contributions from a large number of people, usually through an online platform.</p>
        <div className='space-y-4 lg:flex lg:justify-between gap-5 p-10 border-2 rounded-xl '>
          <div className='lg:w-[700px] mt-5'>
          <h3 className='text-3xl'>Setting Up a Campaign</h3>
            <ol className='space-y-5 mt-5'>
                <li>1. An individual, organization, or group creates a campaign on a crowdfunding platform. This could be for a personal cause , a community project, or a creative endeavor (like funding a film or product).</li>
                <li>2.The campaign creator sets a fundraising goal and a deadline by which the money should be raised. This goal will give potential donors a sense of how much support is needed.</li>
                <li>3. A compelling description is written to explain why funds are needed, how the money will be used, and what impact it will have.
                </li>
            </ol>
          </div>
            <div>
                <img 
                className='rounded-xl w-full h-full'
                src="https://i.ibb.co.com/Pc6vhWZ/cover-Crowdfunding.png" alt="" />
            </div>
        </div>

        <div className='space-y-4 lg:flex lg:justify-between gap-8 p-10 border-2 rounded-xl'>
        <div>
                <img 
                className='rounded-xl w-full h-full'
                src="https://i.ibb.co.com/VqqPb91/how-to-set-funding-goal-for-your-crowdfunding-campaign.jpg" alt="" />
            </div>
          <div className='lg:w-[700px]'>
          <h3 className='text-3xl'>Crowdfunding Goal</h3>
            <ol className='space-y-5 mt-5'>
                <li>1. The goal should be a specific dollar amount that needs to be raised. It should be based on real costs and include all anticipated expenses. </li>
                <li>2. Donors want to know where their money is going. A clear, detailed goal shows transparency and builds trust with potential contributors.</li>
                <li>3. The goal should reflect the funding needs of the campaign. Whether it's for a medical emergency, a business launch, a charitable cause, or a creative project, the goal should be transparent and explain exactly how the money will be spent.</li>
            </ol>
          </div>
            
        </div>

        <div className='space-y-4 lg:flex lg:justify-between border-2 rounded-xl gap-5 p-10 '>
          <div className='lg:w-[1000px] mt-5'>
          <h3 className='text-3xl'>Donating to the Campaign</h3>
          
            <ol className='space-y-5 mt-5'>
                <li>1. Supporters visit crowdfunding platforms to browse through various campaigns, choosing the ones that resonate with them the most.</li>
                <li>2. Donors choose how much to give, fill in payment details (credit card, PayPal, etc.), and confirm the donation. Donations can be a one-time contribution or recurring, depending on the campaign.</li>
                <li>3.After donating, supporters often receive a confirmation email or receipt, and sometimes special perks or rewards based on the campaign type.</li>
                <li>4. You can choose a preset amount (e.g., $10, $50, $100) or enter a custom amount based on how much you’d like to donate.
                Some platforms may also offer recurring donation options (e.g., monthly support).</li>
                
            </ol>
          </div>
            <div>
                <img 
                className='rounded-xl w-full '
                src="https://i.ibb.co.com/D4XYmqt/CROWDFUNDING-MODELS-1.png" alt="" />
            </div>
        </div>





    </div>
    );
};

export default SectionOne;