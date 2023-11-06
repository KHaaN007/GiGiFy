import { Link } from "react-router-dom";

const DesignCard = ({ designJob }) => {

    const { _id, name, deadline, priceRange, shortDescription, email, jobTitle } = designJob;


    return (
        <div>
        <div className="e-card playing">
            <div className="wave -z-20"></div>
            <div className="wave -z-20"></div>
            <div className="wave -z-20"></div>
            <div className="flex lg:flex-row flex-col">
                <div>
                    <h2 className="lg:text-4xl text-xl text-black z-0 px-5  font-serif font-medium shadow-2xl rounded-xl  py-4">{jobTitle}</h2>
                    <h4 className="lg:text-2xl text-lg px-5 z-0 pt-2 font-serif font-medium">Deadline : {deadline}</h4>
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
    );
};

export default DesignCard;