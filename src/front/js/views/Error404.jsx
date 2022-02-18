import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <div className="d-flex flex-column align-items-center gap-3 mt-5 mb-4">
            <h2>
                <span className="px-5 pt-2 pb-3 rounded-3 bg-white bg-opacity-25">ERROR 404: PAGE NOT FOUND</span>
            </h2>

            <Link to="/login" className="btn btn-sm btn-outline-secondary mt-2 text-light text-decoration-none">
                <i className="fas fa-align-justify me-1"></i> Go to <strong>Login Page</strong>
            </Link>
        </div>

    );
};
