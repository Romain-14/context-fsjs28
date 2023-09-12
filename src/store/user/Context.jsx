import { createContext, useReducer } from "react";
import { userReducer } from "./reducer";

const userContext = createContext();

const INITIAL_STATE = {
    user: {
        isLogged: false,
        alias: "john doe",
    },
};

function UserContextProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    function signin(alias) {
        dispatch({ type: "SIGNIN", alias });
    }

    function signout() {
        dispatch({ type: "SIGNOUT" });
    }

    return (
        <userContext.Provider value={{ state, signin, signout }}>
            {children}
        </userContext.Provider>
    );
}

export { userContext };

export default UserContextProvider;
