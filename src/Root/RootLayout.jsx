import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../component/NavBar/NavBar';
import Footer from '../component/Footer/Footer';
import { useEffect } from 'react';

const RootLayout = () => {
    // const lowercasePathname = location.pathname.toLocaleUpperCase();
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = `GiGiFy | Home`
        }
        else {
            document.title = `GiGiFy ${location.pathname.replace('/', ' | ')}`
        }
    }, [location.pathname])

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;