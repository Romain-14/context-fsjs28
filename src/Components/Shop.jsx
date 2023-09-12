import { useContext } from "react";
import Card from "./Card";
import { productContext } from "../store/product/Context";

function Shop() {
    const {
        state: { products },
    } = useContext(productContext);

    return (
        <>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </>
    );
}

export default Shop;
