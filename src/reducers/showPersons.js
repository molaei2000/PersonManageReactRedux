export const showPersonsReducer = (state = true, action) => {
    switch (action.type) {
        case "SHOW_PERSONS":
            return !state;
        default:
            return state;
    }
};
