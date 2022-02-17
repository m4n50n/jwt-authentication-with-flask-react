import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <div className="d-flex flex-column align-items-center gap-3 my-5">
            <h2>
                <span className="px-5 pt-2 pb-3 rounded-3 bg-white bg-opacity-25">ERROR 404: PAGE NOT FOUND</span>
            </h2>

            <Link to="/login" className="mt-2 text-light text-decoration-none">
                <i className="fas fa-align-justify me-1"></i> Go to <strong>Login Page</strong>
            </Link>
        </div>

    );
};
