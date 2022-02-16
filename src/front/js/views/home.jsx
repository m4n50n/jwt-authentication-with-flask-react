import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="col-11 col-sm-8 col-md-6 col-lg-4 bg-secondary bg-opacity-25 mt-5 my-4 p-3 rounded-3 shadow-sm">
					<h5 className="text-center mb-3"><i className="fas fa-vial"></i> JWT Authentication <br /> with <i>Flask</i> and <i>React.js</i></h5>

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

						<div className="d-grid">
							<button type="submit" className="btn btn-sm btn-outline-secondary text-white shadow-none">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
