import React, { useState } from "react";
import { Link } from "react-router-dom";

// Functions
import { ApiUserRegister } from "../service/api_request";

// Components
import { AppModal } from "../component/Modal/Modal.jsx"

export const Signup = () => {
	const [loading, setLoading] = useState(false);
	const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
	const [notifyMessage, setNotifyMessage] = useState(false);
	const modalParams = { show: false, message: "" };
	const [modalConfig, setModalConfig] = useState(modalParams);

	const UserRegister = async () => {
		try {
			const response = await ApiUserRegister(userCredentials);
			const status = response.status;
			const data = await response.json();

			if (status === 201) {
				setModalConfig({ show: true, message: "Thank you for registering and becoming our latest member!" })
			}
			else {
				setModalConfig(modalParams);
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

	return (
		<div>
			<AppModal params={modalConfig} />

			<div className="row justify-content-center align-items-center">
				<div className="col-11 col-sm-8 col-md-6 col-lg-4 bg-secondary bg-opacity-25 mb-4 p-3 rounded-3 shadow-lg">
					<h5 className="text-center"><strong>CREATE</strong> ACCOUNT</h5>
					<p className="small text-center text-muted mb-3">Sign up here to be part of our database.</p>

					<div className="mb-3">
						<label className="form-label text-white mb-1">Email</label>
						<input
							type="email"
							className="form-control form-control-sm shadow-none"
							maxLength="50"
							autoComplete="off"
							onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value.trim().toLowerCase() })}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label text-white mb-1">Password</label>
						<input
							type="password"
							className="form-control form-control-sm shadow-none"
							maxLength="80"
							autoComplete="off"
							onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
						/>
						<div className="form-text">Don't worry, we won't give it to anyone</div>
					</div>

					<div className={`text-danger text-center fw-normal mb-2 ${!notifyMessage ? "d-none" : ""}`}>
						<small>{notifyMessage}</small>
					</div>

					<div className="d-grid">
						<button
							type="button"
							className="btn btn-sm btn-success text-white shadow-none"
							onClick={() => { setLoading(true); UserRegister() }}
						>
							Sign Up

							{
								loading
									? <div className="spinner-border spinner-border-sm ms-2 text-light"></div>
									: null
							}
						</button>
					</div>

					<div className="text-white text-end fw-normal mt-4">
						<small>Already have an account?</small>

						<Link to="/login" className="ms-2 text-light text-decoration-none fw-bold">
							Log In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
