import {useContext} from "react"
import { contextGlobal } from "../Context/Index";
import Wrapper from "./Wrapper";

function Home() {

    const { state : { products } } = useContext(contextGlobal);
	

    return (
		<>
		<Wrapper info={"un produit acheté un produit offert"} product={products[1]}>
			<h2>Notre produit coup de coeur</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis ea modi?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis ea modi?</p>
		</Wrapper>

		<Wrapper product={products[2]}>
			<h2>Notre produit pas chère</h2>
			<ul>
				<li>Lorem, ipsum.</li>
				<li>Lorem, ipsumipsumipsumipsum.</li>
				<li>Lorem, ipsumipsumipsum.</li>
				<li>Lorem, ipsumipsum.</li>
			</ul>
		</Wrapper>

		</>

	);
}

export default Home;
