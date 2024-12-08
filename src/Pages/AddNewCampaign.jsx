import React from 'react';
import Swal from 'sweetalert2'

const AddNewCampaign = () => {


    const handleAddCampaing = event => {
        event.preventDefault();
        const photo = event.target.photo.value;
        const campaignTitle = event.target.campaignTitle.value;
        const campaingType = event.target.campaingType.value;
        const donationAmount = event.target.donationAmount.value;
        const userName = event.target.userName.value;
        const userEmail = event.target.userEmail.value;
        const deadLine = event.target.deadLine.value;
        const description = event.target.description.value;

        const newCampaing = {photo, campaignTitle, campaingType, 
            donationAmount, userName, userEmail, deadLine, description}
           
            console.log(newCampaing);

            // send data fetch data
            fetch('http://localhost:5000/addCampaing', {
                method:'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newCampaing)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Information Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }

            })
    }


    return (
        <div className='w-11/12 mx-auto border py-10  bg-red-700 bg-gradient-to-r from-purple-500  to-pink-500'>

            <div className='space-y-5 px-5 py-10 text-center border lg:w-[700px] mx-auto'>
                <h2 className='text-3xl font-bold'>
                    Add crowdfunding Information
                </h2>
                <hr className='border-y-2' />
                <p className='text-xl '>Crowdfunding is the practice of funding a project, business, or cause by raising small amounts of money from a large number of people, typically via the internet.</p>
            </div>

            <form onSubmit={handleAddCampaing}>
                <div className='grid grid-cols-2 w-10/12 mx-auto gap-5 py-10'>

                    <div>
                        <span className="label-text text-lg">image URL</span>
                        <input
                            type="text"
                            name='photo'
                            placeholder="use image URL"
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div>
                        <span className="label-text text-lg">Campaign title</span>
                        <input
                            type="text"
                            name='campaignTitle'
                            placeholder="Campaign title"
                            className="input input-bordered input-info w-full " />
                    </div>
                    <div>
                        <span className="label-text text-lg">Campaign type</span>
                        <input
                            type="text"
                            name='campaingType'
                            placeholder=" personal issue, startup, business, creative ideas"
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div>
                        <span className="label-text text-lg">Donation amount</span>
                        <input
                            type="text"
                            name='donationAmount'
                            placeholder="Minimum donation amount"
                            className="input input-bordered input-info w-full " />
                    </div>
                    <div>
                        <span className="label-text text-lg">User Name </span>
                        <input
                            type="text"
                            name='userName'
                            placeholder="User Name"
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div>
                        <span className="label-text text-lg">User Email</span>
                        <input
                            type="text"
                            name='userEmail'
                            placeholder="User Email"
                            className="input input-bordered input-info w-full " />
                    </div>
                    <div>
                        <span className="label-text text-lg">Deadline</span>
                        <input
                            type="text"
                            name='deadLine'
                            placeholder="Deadline/(Date) "
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div>
                        <span className="label-text text-lg">Description</span>
                        <input
                            type="text"
                            name='description'
                            placeholder="description"
                            className="input input-bordered input-info w-full " />
                    </div>


                </div>
                <div className='px-24'>
                
                <input type="submit" value="Add Now"  className='btn hover:bg-blue-700 bg-gradient-to-r from-blue-700  to-red-500 w-full text-white border-none'/>
                
            </div>
            </form>

           
        </div>
    );
};

export default AddNewCampaign;