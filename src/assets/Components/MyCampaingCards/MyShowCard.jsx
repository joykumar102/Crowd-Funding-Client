import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyShowCard = ({ myCard, myCampaignCadrs, setMyCampaignCadrs }) => {

    const { _id, photo, campaignTitle, campaingType,
        donationAmount, userName, userEmail, deadLine, description } = myCard;

        const handleDelete = _id => {
            console.log(_id);

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
               
             
                fetch(`https://crowd-funding-server-sigma.vercel.app/addCampaing/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                           Swal.fire({
                    title: "Deleted!",
                    text: "My Campaing has been deleted.",
                    icon: "success"
                  });
                  const remaining = myCampaignCadrs.filter(myCrd => 
                    myCrd._id !== _id
                  );
                  setMyCampaignCadrs(remaining);
                    }
                })
                }
              });
        }

    return (

        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th> Title</th>
                        <th>Type</th>
                        <th>Deadline</th>
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
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-ghost badge-sm">{campaingType}</span>
                        </td>
                        <td>{deadLine} </td>
                        <th>
                            <Link to={`/Update/${_id}`}><button className="btn mr-5 hover:bg-red-400 bg-gradient-to-r from-blue-700  to-pink-300 text-white border-none">Update</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn  hover:bg-red-400 bg-gradient-to-r from-blue-700  to-pink-300 text-white border-none">Delete</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyShowCard;