import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

// Functions
import { ApiUserValidation } from "../service/api_request";

export const Private = () => {
    const [userValidation, setUserValidation] = useState(false);

    useEffect(() => async () => {
        try {
            const response = await ApiUserValidation();
            const status = response.status;
            console.log("statuse", status);

            setUserValidation(status === 200 ? true : false);
        }
        catch (err) {
            setUserValidation(false);
        }
    }, []);

    return !userValidation
        ? <Redirect to="/login" />
        : (
            <div className="mb-4 rounded-3 p-2 bg-light text-dark text-center">
                <h4 className="text-dark mb-3"><u>Welcome to your <strong>private</strong> area!</u></h4>
                <h5 className="text-dark">This is just a <strong><i>JWT authentication</i></strong> test platform, so you can log in or sign up as many times as you want and nothing more!</h5>

                <Link to="/login" className="btn btn-sm btn-secondary m-3">
                    <i className="fas fa-align-justify me-1"></i> Go to <strong>Login Page</strong>
                </Link>
            </div>
        );
};
