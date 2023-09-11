import Card from "./Card";

function Wrapper({info, product, children}) {
    
    return (
        <section>
            <aside>
                <p>{info}</p>
            </aside>
            {children}
            {product && <Card product={product}/>}
                       
        </section>
    );
}

export default Wrapper;
