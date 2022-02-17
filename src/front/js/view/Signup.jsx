import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
	return (
		<div>
			<div className="row justify-content-center align-items-center">
				<div className="col-11 col-sm-8 col-md-6 col-lg-4 bg-secondary bg-opacity-25 mb-4 p-3 rounded-3 shadow-sm">
					<h5 className="text-center mb-3"><strong>CREATE</strong> ACCOUNT</h5>

					<form>
						<div className="mb-3">
							<label className="form-label text-white mb-1">Email</label>
							<input type="email" className="form-control form-control-sm shadow-none" name="email" id="email" autoComplete="off" />
						</div>
						<div className="mb-3">
							<label className="form-label text-white mb-1">Password</label>
							<input type="password" className="form-control form-control-sm shadow-none" id="password" name="password" autoComplete="off" />
							<div className="form-text">Don't worry, we won't give it to anyone</div>
						</div>

						<div className="invalid-feedback text-danger text-center fw-normal mb-2">
							<small>Invalid email or password</small>
						</div>

						<div className="d-grid">
							<button type="submit" className="btn btn-sm btn-success text-white shadow-none">Sign Up</button>
						</div>

						<div className="text-white text-end fw-normal mt-4">
							<small>Already have an account?</small>

							<Link to="/login" className="ms-2 text-light text-decoration-none fw-bold">
								Log In
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
