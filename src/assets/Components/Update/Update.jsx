import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const update = useLoaderData();
    const { _id, photo, campaignTitle, campaingType,
        donationAmount, userName, userEmail, deadLine, description } = update;

        const handleUpdate = event => {
            event.preventDefault();
            const photo = event.target.photo.value;
            const campaignTitle = event.target.campaignTitle.value;
            const campaingType = event.target.campaingType.value;
            const donationAmount = event.target.donationAmount.value;
            const userName = event.target.userName.value;
            const userEmail = event.target.userEmail.value;
            const deadLine = event.target.deadLine.value;
            const description = event.target.description.value;
    
            const UpadtedCampaing = {photo, campaignTitle, campaingType, 
                donationAmount, userName, userEmail, deadLine, description}
               
                console.log(UpadtedCampaing);
    
                // send data fetch data
                fetch(`https://crowd-funding-server-sigma.vercel.app/addCampaing/${_id}`, {
                    method:'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(UpadtedCampaing)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Updated information Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
    
                })
        }

    return (
        <div>
            Update campaing : {userName}

            <div className='w-11/12 mx-auto border py-10 bg-purple-500'>

                <div className='space-y-5 px-5 py-10 text-center  lg:w-[700px] mx-auto'>
                    <h2 className='text-3xl font-bold'>
                        Update Information
                    </h2>
                    
                </div>

                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-2 w-10/12 mx-auto gap-5 py-10'>

                        <div>
                            <span className="label-text text-lg">image URL</span>
                            <input
                                type="text"
                                name='photo'
                                // defaultValue={photo}
                                placeholder="use image URL"
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div>
                            <span className="label-text text-lg">Campaign title</span>
                            <input
                                type="text"
                                name='campaignTitle'
                                // defaultValue={campaignTitle}
                                placeholder="Campaign title"
                                className="input input-bordered input-info w-full " />
                        </div>
                        <div>
                            <span className="label-text text-lg">Campaign type</span>
                            <input
                                type="text"
                                name='campaingType'
                                // defaultValue={campaingType}
                                placeholder=" personal issue, startup, business, creative ideas"
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div>
                            <span className="label-text text-lg">Donation amount</span>
                            <input
                                type="text"
                                name='donationAmount'
                                // defaultValue={donationAmount}
                                placeholder="Minimum donation amount"
                                className="input input-bordered input-info w-full " />
                        </div>
                        <div>
                            <span className="label-text text-lg">User Name </span>
                            <input
                                type="text"
                                name='userName'
                                defaultValue={userName}
                                placeholder="User Name"
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div>
                            <span className="label-text text-lg">User Email</span>
                            <input
                                type="text"
                                name='userEmail'
                                defaultValue={userEmail}
                                placeholder="User Email"
                                className="input input-bordered input-info w-full " />
                        </div>
                        <div>
                            <span className="label-text text-lg">Deadline</span>
                            <input
                                type="text"
                                name='deadLine'
                                // defaultValue={deadLine}
                                placeholder="Deadline/(Date) "
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div>
                            <span className="label-text text-lg">Description</span>
                            <input
                                type="text"
                                name='description'
                                // defaultValue={description}
                                placeholder="description"
                                className="input input-bordered input-info w-full " />
                        </div>


                    </div>
                    <div className='px-24'>
                        {/* <button className='btn hover:bg-red-700 bg-gradient-to-r from-purple-700  to-pink-500 w-full text-white border-none'>Add Now</button> */}
                        <input type="submit" value="Update" className='btn hover:bg-red-700 bg-gradient-to-r from-purple-700  to-pink-500 w-full text-white border-none' />

                    </div>
                </form>


            </div>
        </div>
    );
};

export default Update;