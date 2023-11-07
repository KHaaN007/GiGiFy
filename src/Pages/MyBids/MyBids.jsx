import { useContext } from "react";
import useBids from "../../Hooks/useBids/useBids";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../RowCssComponent/Loading/Loading";

const MyBids = () => {
    const { user } = useContext(AuthContext)


    const { data, isLoading, isFetching, refetch } = useBids()
    console.log(user);

// console.log(data);
    if (isLoading) {
        return <Loading></Loading>
    }

    const filterBidEmail = data.filter(bidEmail => bidEmail?.userEmail === user?.email)
    console.log(filterBidEmail);





    // console.log(data);
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>This My Bids Page</h2>
            {
                filterBidEmail && filterBidEmail.map(bid=><div key={bid._id}>

                    <h2>BiD Email : {bid.userEmail} </h2>

                </div>)
            }
        </div>
    );
};

export default MyBids;