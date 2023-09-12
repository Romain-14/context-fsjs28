function userReducer(state, action) {
    switch (action.type) {
        case "SIGNIN":
            return { ...state, user: { isLogged: true, alias: action.alias } };

        case "SIGNOUT":
            return { ...state, user: { isLogged: false, alias: "John Doe" } };

        default:
            throw new Error("action inconnu");
    }
}

export { userReducer };
