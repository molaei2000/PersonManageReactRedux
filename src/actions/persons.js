import {toast} from 'react-toastify'


export const addPerson = fullname => {
    return async (dispatch, getState) => {
        const persons = [...getState().persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            await dispatch({ type: "ADD_PERSON", payload: persons });
            toast.success('success', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            await dispatch(clearPerson());
        }
    };
};

export const deletePerson = personId => {
    return async (dispatch, getState) => {
        const persons = [...getState().persons];
        const filteredPersons = persons.filter(p => p.id !== personId);
        await dispatch({ type: "DELETE_PERSON", payload: filteredPersons });
        toast.error('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
};

export const updatePerson = (event, personId) => {
    return async (dispatch, getState) => {
        const allPersons = [...getState().persons];

        const personIndex = allPersons.findIndex(p => p.id === personId);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        await dispatch({ type: "UPDATE_PERSON", payload: persons });
    };
};

export const setPerson = event => {
    return async dispatch => {
        await dispatch({
            type: "SET_PERSON",
            payload: event.target.value
        });
    };
};

export const clearPerson = () => {
    return async dispatch => {
        await dispatch({
            type: "CLEAR_PERSON",
            payload: ""
        });
    };
};

export const setShowPersons = () => {
    return async dispatch => {
        await dispatch({
            type: "SHOW_PERSONS"
        });
    };
};

