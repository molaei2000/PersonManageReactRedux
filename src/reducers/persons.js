export const personsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PERSON":
            return [...action.payload];
        case "DELETE_PERSON":
            return [...action.payload];
        case "UPDATE_PERSON":
            return [...action.payload];
        default:
            return state;
    }
};
