import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { contextGlobal } from "../Context/Index";

function Header() {
    const {
        state: {
            user: { isLogged, alias },
        },
    } = useContext(contextGlobal);

    console.log(isLogged, alias);

    return (
        <header>
            <nav>
                <NavLink to={"/"}>home</NavLink>
                <NavLink to={"/shop"}>shop</NavLink>
                {isLogged ? (
                    <>
                        <NavLink to={"/dashboard"}>dashboard</NavLink>
                        <NavLink to={"/signout"}>signout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={"/signin"}>signin</NavLink>
                    </>
                )}
            </nav>

            {isLogged && <p>Vous n'avez rien dans votre panier {alias} 😭</p>}

        </header>
    );
}

export default Header;
