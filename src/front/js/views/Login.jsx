import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="row justify-content-center align-items-center">
                <div className="col-11 col-sm-8 col-md-6 col-lg-4 bg-secondary bg-opacity-25 mb-4 p-3 rounded-3 shadow-sm">
                    <h5 className="text-center mb-3">ACCOUNT <strong>LOGIN</strong></h5>

                    <form>
                        <div className="mb-3">
                            <label className="form-label text-white mb-1">Email</label>
                            <input type="email" className="form-control form-control-sm shadow-none" name="email" id="email" autoComplete="off" />
                            <div className="form-text">Make sure to use the registration email</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white mb-1">Password</label>
                            <input type="password" className="form-control form-control-sm shadow-none" id="password" name="password" autoComplete="off" />
                        </div>

                        <div class="invalid-feedback text-danger text-center fw-normal mb-2">
                            <small>Sorry, we don't recognise this account.</small>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-sm btn-success text-white shadow-none">Log In</button>
                        </div>

                        <div class="text-white text-end fw-normal mt-4">
                            <small>Don't have and account?</small>

                            <Link to="signup" className="ms-2 text-light text-decoration-none fw-bold">
                                Register Now!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
