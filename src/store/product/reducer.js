function productReducer(state, action) {
    switch (action.type) {
        case "ONE":
            const [oneProduct] = state.products.filter(
                (product) => product.id === parseInt(action.id)
            );
            return { ...state, oneProduct };

        default:
            throw new Error("action inconnu");
    }
}

export { productReducer };
