const initialState = {
    data: []
}
const search = (state = initialState, action) => {
    switch(action.type) {
        case "GameId":
            return action.search;
        case "Provider":
            return action.search;
        case "TpdId":
            return action.search;
        case "search":
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}

export default search;
