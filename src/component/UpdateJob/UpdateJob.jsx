import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const UpdateJob = () => {


    const { user } = useContext(AuthContext)
    const handleUpdateJob = e => {
        e.preventDefault();

        const email = user.email



        e.preventDefault();
        const form = e.target;
        
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const shortDescription = form.shortDescription.value;
        const name = form.name.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;


        const priceRange = `${minimumPrice}-${maximumPrice}`;


        const updateJob = {
            email,
            jobTitle,
            deadline,
            shortDescription,
            name,
            priceRange,

        }

        console.log(updateJob);
    }


    return (
        <div>
            <div className="w-full bg-gray-800 h-screen">

                <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center text-white">Update Job</p>
                        <form
                            onSubmit={handleUpdateJob} 
                            action="" method="post">
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Email</label>
                                    <input
                                        readOnly
                                        defaultValue={user?.email}
                                        name="email"
                                        type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>

                            </div>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Job Title</label>
                                    <input
                                        name="name"
                                        type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none text-gray-300">Deadline</label>
                                    <input
                                        name="deadline"
                                        type="date" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">shortDescription</label>
                                    <input
                                        name="shortDescription"
                                        type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className=" font-semibold leading-none text-gray-300">Category</label>
                                    <div className="mt-2">
                                        <select id="name" name="jobTitle" className="w-full leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-2 border-0 bg-gray-800 rounded">
                                            <option>Web Development</option>
                                            <option>Digital Marketing</option>
                                            <option>Graphic Design</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Minimum Price</label>
                                    <input
                                        name="minimumPrice"
                                        type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none text-gray-300">Maximum Price</label>
                                    <input
                                        name="maximumPrice"
                                        type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Add Job
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default UpdateJob;