function productReducer(state, action){

    switch (action.type) {
        case "ALL":
            return {...state};

        case "ONE":
            const [oneProduct] = state.products.filter(product => product.id === parseInt(action.id));
            return {...state, oneProduct};

        case "SIGNIN":
            return {...state, user: {isLogged: true, alias: action.alias} }
        case "SIGNOUT":
            return {...state, user: {isLogged: false, alias: "John Doe"} }

        default:
            throw new Error("action inconnu");
    }
   
}

export { productReducer };