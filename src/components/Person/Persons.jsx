import React from "react";
import Person from "./Person";
import { useSelector, useDispatch } from "react-redux";
import { deletePerson, updatePerson } from "../../actions/persons";

const Persons = () => {
    const persons = useSelector(state => state.persons);
    const dispatch = useDispatch();

    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => dispatch(deletePerson(person.id))}
                    changed={e => dispatch(updatePerson(e, person.id))}
                />
            ))}
        </div>
    );
};

export default Persons;
