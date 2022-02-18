import React from "react";
import { Link } from "react-router-dom";

// Functions
import { ApiUserValidation } from "../service/api_request";

const UserValidation = async () => {
    try {
        const response = await ApiUserValidation();
        const status = response.status;
        const data = await response.json();

        if (status === 200) {
            localStorage.setItem("token", data.token);
            setLoginCorrect(true);
        }
        else {
            setNotifyMessage(data)
        }
    }
    catch (err) {
        setNotifyMessage("Internal Server Error. Please, try again later.");
    }
    finally {
        setLoading(false)
    }
}

export const Private = () => {
    return (
        <div className="mb-4 rounded-3 p-2 bg-light text-dark text-center">
            <h4 className="text-dark mb-3"><u>Welcome to your <strong>private</strong> area!</u></h4>
            <h5 className="text-dark">This is just a <strong><i>JWT authentication</i></strong> test platform, so you can log in or sign up as many times as you want and nothing more!</h5>

            <Link to="/login" className="btn btn-sm btn-secondary m-3">
                <i className="fas fa-align-justify me-1"></i> Go to <strong>Login Page</strong>
            </Link>
        </div>
    );
};
