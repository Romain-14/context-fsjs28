import { createContext, useReducer } from "react";
import { productReducer } from "../productReducer";

const contextGlobal = createContext();

const INITIAL_STATE = {
    user: {
        isLogged: false,
        alias: "john doe"
    },
	products: [
		{id: 1, label: "Lorem ipsum dolor sit.", content: "Lorem, ipsum dolor sit amet !"},
	{id: 2, label: "Lorem ipsum dolor sit.", content: "Lorem, ipsum dolor sitlor sit amet consectetur adipisicinglor sit amet consectetur adipisicing amet consectetur adipisicing elit. Cumque natus voluptas cum!"},
	{id: 3, label: "Lorem ipsum dolor sit.", content: "Lorem, ipsum dolor lor sit amet adipisicingsit amet consectetur adipisicing elit. Cumque natus voluptas cum!"},
	{id: 4, label: "Lorem ipsum dolor sit.", content: "Lorem, ipsum dolor sit amet consectetur adipisicinglor sit amet consectetur adipisicing elit. Cumque natus voluptas cum!"},
	]
};

function ContextGlobalProvider({children}){

    const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);

    function getOneProduct(id){
        dispatch({type: "ONE", id });
    }
    
    function signin(alias){
        dispatch({type: "SIGNIN", alias });
    }

    function signout(){
        dispatch({type: "SIGNOUT" });
    }

    return (

        <contextGlobal.Provider value={{state, getOneProduct, signin, signout}} >

            {children}

        </contextGlobal.Provider>

    )

}

export { contextGlobal };

export default ContextGlobalProvider;