import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../store/user/Context";

function Signin() {
    const navigate = useNavigate();
    const [alias, setAlias] = useState("");

    const { signin } = useContext(userContext);

    function handleSubmit(e) {
        e.preventDefault();
        signin(alias);
        navigate("/dashboard");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <input type="submit" value="se connecter" />
        </form>
    );
}

export default Signin;
