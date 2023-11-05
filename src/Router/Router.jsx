import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../Root/RootLayout";
import Home from "../Home/Home";
import SignUp from "../Authentication/SignUp/SignUp";
import SignIn from "../Authentication/SignIn/SignIn";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import AddJob from "../Pages/AddJob.jsx/AddJob";
import BidRequests from "../Pages/BidRequests/BidRequests";
import MyBids from "../Pages/MyBids/MyBids";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/logout',
                element: <SignUp></SignUp>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path:'/addJob',
                element:<AddJob></AddJob>
            },
            {
                path:'/bidRequests',
                element:<BidRequests></BidRequests>
            },
            {
                path:'/myBids',
                element:<MyBids></MyBids>
            },
            {
                path:'/myPostedJobs',
                element:<MyPostedJobs></MyPostedJobs>
            }
        ]
    },
]);

export default router 