import { useContext } from "react";
import useJobs from "../../Hooks/useJobs/useJobs";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../RowCssComponent/Loading/Loading";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const { data, isLoading, refetch } = useJobs()
    const { user } = useContext(AuthContext)

    console.log(user);
    if (isLoading) {
        return <Loading></Loading>
    }


    const filterEmail = data.filter(job => job?.email === user?.email)
    console.log(filterEmail);



    const handleJobDelete = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/postedJob/${id}`)

                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        refetch()


                    })



            }
        })







    }




    return (
        <div className="mx-auto container my-20">

            <h2 className="lg:text-5xl text-2xl p-4  lg:my-16  lg:w-2/4 text-center mx-auto text-blue-500">All Posted Job By <span className="font-mono text-indigo-500">{user?.displayName}</span></h2>
            <div className="grid lg:mx-auto ml-5 lg:grid-cols-4 grid-cols-1 gap-5 ">
                {
                    filterEmail && filterEmail.map(postedJob => <div key={postedJob._id}>

                        <div className="w-full h-full shadow-transparent max-w-sm bg-gradient-to-tl from-blue-500  to-indigo-500 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <img className="w-32" src="https://i.ibb.co/thRPLrS/Beige-and-Black-Modern-Handwritten-Art-Design-Animated-Logo-removebg-preview-1.png" alt="" />
                            <div className="flex justify-end px-4 pt-4">

                            </div>
                            <div className="flex flex-col px-5 pb-10">
                                <h3 className="text-2xl py-1 font-semibold">Deadline : {postedJob.deadline}</h3>
                                <h2 className="font-semibold text-xl">Email : {postedJob.email}</h2>
                                <h5 className="mb-1 text-2xl py-1 font-medium text-gray-900 dark:text-white">Name : {postedJob.name}</h5>
                                <span className="text-lg font-medium">Job-Title : {postedJob.jobTitle}</span>
                                <h3 className="text-xl py-2 font-mono font-medium">Price-Range : {postedJob.priceRange}</h3>
                                <p className="text-lg font-medium ">{postedJob.shortDescription}</p>
                                <div className="flex justify-center items-center mt-4 space-x-3 md:mt-6">
                                   <Link to={`/updateJob/${postedJob._id}`}>
                                   
                                   <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>

                                   </Link>


                                    <button onClick={() => handleJobDelete(postedJob._id)} href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>


                                </div>
                            </div>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;