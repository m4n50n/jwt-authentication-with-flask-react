import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Functions
import { ApiUserLogin } from "../service/api_request";

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
    const [notifyMessage, setNotifyMessage] = useState(false);
    const [loginCorrect, setLoginCorrect] = useState(false);

    const userLogin = async () => {
        try {
            const response = await ApiUserLogin(userCredentials);
            const status = response.status;
            const data = await response.json();

            if (status === 200) {
                localStorage.setItem("api-flask-token", data.token);
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

    return loginCorrect
        ? <Redirect to="/private" />
        : (
            <div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-4 bg-secondary bg-opacity-25 mb-4 p-3 rounded-3 shadow-lg">
                        <h5 className="text-center mb-3">ACCOUNT <strong>LOGIN</strong></h5>

                        <div className="mb-3">
                            <label className="form-label text-white mb-1">Email</label>
                            <input
                                type="email"
                                className="form-control form-control-sm shadow-none"
                                autoComplete="off"
                                onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value.trim().toLowerCase() })}
                            />
                            <div className="form-text">Make sure to use the registration email</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white mb-1">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-sm shadow-none"
                                autoComplete="off"
                                onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
                            />
                        </div>

                        <div className={`text-danger text-center fw-normal mb-2 ${!notifyMessage ? "d-none" : ""}`}>
                            <small>{notifyMessage}</small>
                        </div>

                        <div className="d-grid">
                            <button
                                type="button"
                                className="btn btn-sm btn-success text-white shadow-none"
                                onClick={() => { setLoading(true); userLogin() }}
                            >
                                Log In

                                {
                                    loading
                                        ? <div className="spinner-border spinner-border-sm ms-2 text-light"></div>
                                        : null
                                }
                            </button>
                        </div>

                        <div className="text-white text-end fw-normal mt-4">
                            <small>Don't have and account?</small>

                            <Link to="/signup" className="ms-2 text-light text-decoration-none fw-bold">
                                Register Now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
};
