import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const JobDetails = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    const { _id, name, deadline, priceRange, shortDescription, email, jobTitle } = data


    const status = 'Pending'
    const handleAddBid = e => {
        e.preventDefault()
        const form = e.target
        const bidPrice = form.bidPrice.value;


        const bid = {
            userEmail,
            jobTitle,
            deadline,
            bidPrice,
            status,
            email

        }


        fetch('http://localhost:5000/bid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bid)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(

                        'Added Your Bid Succesfully.',

                    )
                }
            })





    }



    return (
        <div>

            {/* <!-- component --> */}
            <div className="w-full relative shadow-2xl rounded overflow-hidden">
                <div className="top h-64 w-full bg-blue-600 overflow-hidden relative" >
                    <img src="https://i.ibb.co/thRPLrS/Beige-and-Black-Modern-Handwritten-Art-Design-Animated-Logo-removebg-preview-1.png" alt="" className="bg w-full h-full object-cover object-center absolute z-0" />
                    <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                        <img src="https://i.ibb.co/thRPLrS/Beige-and-Black-Modern-Handwritten-Art-Design-Animated-Logo-removebg-preview-1.png" className="h-32 w-32 object-cover rounded-full" />
                        <h1 className="mr-5 block cursor-pointer py-1.5 font-serif lg:text-3xl md:text-3xl text-2xl text-white  font-medium leading-relaxed text-inherit antialiased">GiGiFy</h1>
                        <h4 className="text-lg font-semibold">Want to work as a {data.name} ?</h4>
                    </div>
                </div>
                <div className="grid grid-cols-12 lg:ml-16 ml-4 mt-10 bg-white flex items-center">

                    <div className="relative lg:col-span-5 duration-300   hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_60deg)] group border bg-gradient-to-tl from-blue-500  to-indigo-500 border-4  overflow-hidden rounded-2xl relative lg:w-3/4 lg:h-4/5 h-96 w-96  p-5 flex flex-col items-start gap-4">
                        <div className="text-gray-50">
                            {/* <span className="font-bold text-5xl">Jr</span> */}
                            <h2 className="lg:text-4xl text-xl text-black z-0 px-5 py-3 font-serif font-medium">{name}</h2>
                        </div>


                        <div className="e-card playing p-3">
                            <div className="wave -z-20"></div>
                            <div className="wave -z-20"></div>
                            <div className="wave -z-20"></div>
                            <div className="flex lg:flex-row flex-col">
                                <div>

                                    <h4 className="lg:text-2xl text-lg px-5 z-0 font-serif font-medium">Deadline : {deadline}</h4>
                                    <h3 className="text-2xl font-serif py-3 px-5 z-0 ">Price Range : ${priceRange}</h3>
                                    <p className="w-80 font-bold lg:text-xl px-5">{shortDescription}</p>
                                </div>
                                <div className="m-auto lg:mt-64 mt-10">

                                    <Link to={`/jobDetail/${_id}`}>

                                        <button className="before:ease rounded-lg relative h-12 w-40 overflow-hidden border border-blue-500 bg-indigo-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40">
                                            <span relative="relative z-10">Bid Now</span>
                                        </button>
                                    </Link>

                                </div>
                            </div>


                        </div>



                    </div>

                    <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-7">
                        <div className="px-4 pt-4">
                            <form
                                onSubmit={handleAddBid}
                                action="#" className="flex flex-col space-y-8">

                                <div>
                                    <h3 className="text-2xl font-semibold">Place Your Bid</h3>
                                    <hr />
                                </div>



                                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                                    <div className="form-item w-full">
                                        <label className="text-xl ">Price </label>
                                        <input
                                            placeholder="Your Bidding Amount"
                                            name="bidPrice"
                                            type="number" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                                    </div>

                                    <div className="form-item w-full">
                                        <label className="text-xl ">Deadline</label>
                                        <input
                                            name="deadline"
                                            value={deadline}
                                            type="text" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                                    </div>
                                </div>
                                <div className="form-item">
                                    <label className="text-xl font-semibold">Email</label>

                                    <input
                                        value={user?.email}
                                        name="email"
                                        type="text" className="w-full text-xl font-medium  text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" />
                                </div>
                                <div className="form-item">
                                    <label className="text-xl font-semibold">Buyer Email</label>
                                    <input
                                        value={email}
                                        name="buyerEmail"
                                        type="text" className="w-full  text-black text-opacity-50 rounded text-xl font-medium shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" />
                                </div>
                                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                                </div>

                                <button
                                    disabled={user?.email === email}
                                    className="btn btn-secondary">Bid On The Project</button>

                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default JobDetails;