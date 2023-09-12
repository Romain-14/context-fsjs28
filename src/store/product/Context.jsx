import { createContext, useReducer } from "react";
import { productReducer } from "./reducer";

const productContext = createContext();

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            label: "Lorem ipsum dolor sit.",
            content: "Lorem, ipsum dolor sit amet !",
        },
        {
            id: 2,
            label: "Lorem ipsum dolor sit.",
            content:
                "Lorem, ipsum dolor sitlor sit amet consectetur adipisicinglor sit amet consectetur adipisicing amet consectetur adipisicing elit. Cumque natus voluptas cum!",
        },
        {
            id: 3,
            label: "Lorem ipsum dolor sit.",
            content:
                "Lorem, ipsum dolor lor sit amet adipisicingsit amet consectetur adipisicing elit. Cumque natus voluptas cum!",
        },
        {
            id: 4,
            label: "Lorem ipsum dolor sit.",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicinglor sit amet consectetur adipisicing elit. Cumque natus voluptas cum!",
        },
    ],
};

function ProductContextProvider({ children }) {
    const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
 

    function getOneProduct(id) {
        dispatch({ type: "ONE", id });
    }

    return (
        <productContext.Provider value={{ state, getOneProduct }}>
            {children}
        </productContext.Provider>
    );
}

export { productContext };

export default ProductContextProvider;
