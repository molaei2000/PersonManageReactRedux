import React from "react";
import PropTypes from "prop-types";

const Person = ({ fullname, deleted, changed }) => {
    return (
        <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto">
            <div className="card-body text-center">
                <p className="d-block">{`${fullname}`}</p>
                <div className="input-group justify-content-center">
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder={fullname}
                        onChange={changed}
                    />
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-sm btn-danger fa fa-trash"
                            onClick={deleted}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

Person.propTypes = {
    fullname: PropTypes.string,
    deleted: PropTypes.func,
    changed: PropTypes.func
};

export default Person;
