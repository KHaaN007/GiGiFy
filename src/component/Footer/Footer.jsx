import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <footer className="bg-white bg-gradient-to-tl from-blue-500  to-indigo-600">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <ul className="list-unstyled">
                            <li>
                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-xl" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                            </li>
                            <li>
                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                            </li>
                            <li>
                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Contact</a>
                            </li>
                        </ul>

                        <ul className="list-unstyled">
                            <li>
                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-xl" href="https://www.creative-tim.com/presentation?ref=njs-profile">LEGAL</a>
                            </li>
                            <li>
                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>



                    <div className="flex items-center justify-between">
                        <div className="felx items-center">
                            <a href="#">
                                <img className="w-32" src="https://i.ibb.co/thRPLrS/Beige-and-Black-Modern-Handwritten-Art-Design-Animated-Logo-removebg-preview-1.png" alt="" />
                            </a>
                                <Link
                                    to='/'
                                    href="#"
                                    className="mr-5 block cursor-pointer  font-serif lg:text-3xl md:text-3xl text-2xl text-white  font-medium leading-relaxed text-inherit antialiased"
                                >
                                    GiGiFy
                                </Link>
                        </div>
                        <div className="flex gap-4 hover:cursor-pointer">
                            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                            <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                            <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                            <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />

                        </div>

                        <div>
                            <div className="container mx-auto flex flex-col items-center">
                                <div className="text-center">
                                    <p className="text-xl font-bold">Office Address</p>
                                    <p className="mt-2"> Banani, Dhaka</p>
                                </div>
                                <div className="mt-2">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" className="hover:underline">GiGiFy™</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;