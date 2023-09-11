import {Link} from "react-router-dom";

function Card({product}) {
    return( 
    
        <article>
            <h3>{product.label} à l'id n°{product.id}</h3>
            <p>{product.content}</p>
            <Link to={"/shop/" + product.id}>voir ce produit</Link>
        </article>
        )
}

export default Card;
