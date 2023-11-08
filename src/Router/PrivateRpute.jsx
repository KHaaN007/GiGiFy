import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../RowCssComponent/Loading/Loading";

const PrivateRouter = ({ children }) => {
    const { loader, user } = useContext(AuthContext)

    if (loader) {
        return <>
         
            <Loading></Loading>
        </>
    }


    if (user && !loader) {
        return children
    }

    return <Navigate to='/login'></Navigate>

};

export default PrivateRouter;