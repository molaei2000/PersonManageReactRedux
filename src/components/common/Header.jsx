import React from "react";
import { Alert, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = ({ appTitle }) => {
    const persons = useSelector(state => state.persons);

    let badgeStyle = "";

    if (persons.length >= 3) badgeStyle = "success";
    if (persons.length <= 2) badgeStyle = "warning";
    if (persons.length <= 1) badgeStyle = "danger";

    return (
        <div>
            <Alert variant="info">
                <h2>{appTitle}</h2>
            </Alert>
            <Alert variant="light">
                تعداد اشخاص{" "}
                <Badge pill variant={badgeStyle}>
                    {persons.length}
                </Badge>{" "}
                نفر می باشد
            </Alert>
        </div>
    );
};

export default Header;
