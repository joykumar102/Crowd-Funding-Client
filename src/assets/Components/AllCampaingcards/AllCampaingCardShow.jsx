import React from 'react';
import { Link } from 'react-router-dom';

const AllCampaingCardShow = ({allCard}) => {

    const {_id, photo, campaignTitle, campaingType, 
        donationAmount, userName, userEmail, deadLine, description} = allCard;
    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th> Title</th>
                        <th>Type</th>
                        <th>Donation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-20 w-20">
                                        <img
                                            src={photo}
                                            alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold w-40"> {campaignTitle}</div>
                                    {/* <div className="text-sm opacity-50">United States</div> */}
                                </div>
                            </div>
                        </td>
                        <td>  
                            <span className="badge badge-ghost badge-sm">{campaingType}</span>
                        </td>
                        <td>{deadLine}</td>
                        <th>
                            <Link to={`/Details/${_id}`}><button className="btn mr-5 hover:bg-red-400 bg-gradient-to-r from-blue-700  to-pink-300  text-white border-none">See More</button></Link>

                        </th>
                    </tr>
                  
                </tbody>
                
            </table>
        </div>
        </div>
    );
};

export default AllCampaingCardShow;