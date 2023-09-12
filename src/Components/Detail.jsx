import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../store/product/Context";

function Detail() {
    const { id } = useParams();
    const { state: {oneProduct}, getOneProduct } = useContext(productContext);

    useEffect(() => {
        getOneProduct(id);
    }, []);

    return (
        <>
            {oneProduct && (
                <article>
                    <h2>
                        {oneProduct.label} || ID --&gt;
                        {oneProduct.id}
                    </h2>
                </article>
            )}
        </>
    );
}

export default Detail;
