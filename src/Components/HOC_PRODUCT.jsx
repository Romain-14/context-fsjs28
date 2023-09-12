import React from "react";
import ProductContextProvider from "../store/product/Context";

function HOC({ child }) {
    const Child = child;
    return (
        <ProductContextProvider>
            <Child />
        </ProductContextProvider>
    );
}

export default HOC;