import React from 'react';
import { Link } from 'react-router-dom';

const SectionTwo = () => {
    return (
        <div className='py-16 px-20 bg-sky-100'>
           <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Donation Makes a Difference</h2>
          <p className="text-lg text-gray-600 mb-12">Your Donation Makes a Difference" is a powerful phrase that emphasizes the impact of individual contributions in collective fundraising efforts. Crowdfunding is often used to gather funds for a variety of causes, including charitable initiatives, startup businesses, medical expenses, community projects, and more. </p>
  
          {/* Donation Impact */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Impact Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">The cause or project</h3>
              <p className="text-lg text-gray-600">This campaign aims to briefly describe the purpose of the campaign.  provide medical treatment for a patient, support a new social initiative, fund a small business, build a community center.</p>
            </div>
  
            {/* Impact Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Why Your Donation Matters</h3>
              <p className="text-lg text-gray-600">Every dollar counts. Your contribution helps to describe the specific ways the donation will directly help, such as “fund essential treatment,” “provide education,” or “help launch a life-changing project”.</p>
            </div>
  
            {/* Impact Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">The Power of Community</h3>
              <p className="text-lg text-gray-600">No matter how small, your donation can snowball into something much larger. It's the power of community — people like you coming together to make a real difference.</p>
            </div>
          </div>
  
          {/* Call to Action */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Help Us Spread Funding</h3>
            <p className="text-lg text-gray-600 mb-6">To effectively spread your crowdfunding campaign and get more support, it's essential to reach as many people as possible and inspire them to contribute.</p>
          <Link to="/AddNewCamping"><button className="btn btn-accent">Donate Now</button></Link>
           
          </div>
        </div>
        </div>
    );
};

export default SectionTwo;