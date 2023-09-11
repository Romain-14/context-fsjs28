import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contextGlobal } from "../Context/Index";

function Detail() {
    const { id } = useParams();
    const { state: {oneProduct}, getOneProduct } = useContext(contextGlobal);

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
