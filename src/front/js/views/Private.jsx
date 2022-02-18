import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

// Functions
import { ApiUserValidation, ApiUserLogout } from "../service/api_request";

// Components
import { Spinner } from "../component/Spinner/Spinner.jsx";

export const Private = () => {
    const [loading, setLoading] = useState(true);
    const [validatedUser, setValidatedUser] = useState(true);

    useEffect(() => {
        async function userValidation() {
            try {
                const response = await ApiUserValidation();
                const status = response.status;

                setValidatedUser(status === 200 ? true : false);
            }
            catch (err) {
                console.error(err);
                setValidatedUser(false);
            }
            finally {
                setLoading(false);
            }
        }

        userValidation();
    }, []);

    return loading
        ? <Spinner />
        : !validatedUser
            ? <Redirect to="/login" />
            : (
                <div className="mb-4 rounded-3 p-2 bg-light text-dark text-center">
                    <h4 className="text-dark mb-3"><u>Welcome to your <strong>private</strong> area!</u></h4>
                    <h5 className="text-dark">This is just a <strong><i>JWT authentication</i></strong> test platform, so you can log in or sign up as many times as you want and nothing more!</h5>

                    <button
                        type="button"
                        className="btn btn-sm btn-danger m-3"
                        onClick={() => {
                            ApiUserLogout();
                            setValidatedUser(false);
                        }}
                    >
                        <i className="fas fa-door-open me-1"></i> Log <strong>Out</strong>
                    </button>
                </div>
            );
};
