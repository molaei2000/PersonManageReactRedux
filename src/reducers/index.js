import { combineReducers } from "redux";
import { personsReducer } from "./persons";
import { personReducer } from "./person";
import { showPersonsReducer } from "./showPersons";

export const reducers = combineReducers({
    persons: personsReducer,
    person: personReducer,
    showPersons: showPersonsReducer
});
