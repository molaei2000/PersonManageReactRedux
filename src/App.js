import React from "react";
import { Button } from "react-bootstrap";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";
import { useSelector, useDispatch } from "react-redux";
import { setShowPersons } from "./actions/persons";
import {ToastContainer} from 'react-toastify'

const App = () => {
    const showPersons = useSelector(state => state.showPersons);
    const dispatch = useDispatch();
    return (
        <div className="rtl text-center">
            <Header appTitle="مدیریت کننده اشخاص" />

            <NewPerson />

            <Button
                onClick={() => dispatch(setShowPersons())}
                variant={showPersons ? "info" : "danger"}
            >
                نمایش اشخاص
            </Button>

            {showPersons ? <Persons /> : null}
            <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <ToastContainer />
        </div>
    );
};
export default App;
