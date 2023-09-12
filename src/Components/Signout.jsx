import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../store/user/Context";

function Signout() {
    const navigate = useNavigate();

    const { signout } = useContext(userContext);

    useEffect(() => {
        signout();
        navigate("/");
    }, [navigate, signout]);

    return null;
}

export default Signout;
