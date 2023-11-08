import { useContext } from "react";
import useBids from "../../Hooks/useBids/useBids";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ShadowBtn from "../../RowCssComponent/ShadowBtn/ShadowBtn";
import Loading from "../../RowCssComponent/Loading/Loading";
// import Swal from "sweetalert2";

const BidRequests = () => {


    const { data, isLoading } = useBids()
    const { user } = useContext(AuthContext)
    const userEmail = user?.email

    if (isLoading) {
        return <Loading></Loading>
    }


    const filterBidEmail = data?.filter(bidEmail => bidEmail.email === userEmail)





    const handleAccept = id => {
        console.log(id);
   
        const status = 'In progress'


        const updateBid = {
            status

        }

        fetch(`http://localhost:5000/updateBidReq/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateBid)
        })
            .then(res => res.json())
            .then(data => console.log(data))


    }




    const handleReject = id => {
        console.log(id);
   
        const status = 'Rejected'


        const updateBid = {
            status

        }

        fetch(`http://localhost:5000/updateBidReq/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateBid)
        })
            .then(res => res.json())
            .then(data => console.log(data))


    }






    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>This Bid Requests Page</h2>
            <div>
                <h2 className='text-center text-2xl font-semibold'>This My Bids Page</h2>
                {/* <!-- component --> */}
                <div className="bg-white p-8 rounded-md w-full">
                    <div className=" flex items-center justify-between pb-6">
                        <div>
                            <h2 className="text-gray-600 font-semibold">Bidding Jobs</h2>
                            <span className="text-xs">All Bids</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex bg-gray-50 items-center p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Job Title
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Deadline
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            filterBidEmail && filterBidEmail.map(bid => <tr key={bid._id}>

                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            <img className="w-full h-full rounded-full"
                                                                src={user.photoUrl}
                                                                alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {bid.userEmail}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{bid.jobTitle}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {bid.deadline}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                        <span className="relative">{bid.bidPrice}</span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                        <span className="relative">{bid.status}</span>
                                                    </span>
                                                </td>
                                                <td>

                                                </td>

                                                <td className="px-5 py-5 gap-5 border-b flex flex-row w-52 border-gray-200 bg-white text-sm">
                                                    <button 
                                                    onClick={() => handleAccept(bid._id)}
                                                    className="text-gray-900 whitespace-no-wrap shadow__btn">
                                                        Accept
                                                        <ShadowBtn></ShadowBtn>
                                                    </button>
                                                    <button 
                                                    onClick={() => handleReject(bid._id)}
                                                    className="text-gray-900 whitespace-no-wrap shadow__btn">
                                                        Reject
                                                        <ShadowBtn></ShadowBtn>
                                                    </button>
                                                </td>

                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidRequests;