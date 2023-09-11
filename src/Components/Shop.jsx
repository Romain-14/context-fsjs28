import {useContext} from "react"

import { contextGlobal } from "../Context/Index";
import Card from "./Card";


function Shop() {

	const { state : { products } } = useContext(contextGlobal);

  return (
	<>
    {
		products.map(product => <Card key={product.id} product={product}/>)
	}
	</>
  )
}

export default Shop