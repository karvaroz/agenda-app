import React from "react";

import LoginImg from "../../assets/login.svg";

import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<div className="content">
			<div className="container">
				<div className="row">
					<div className="col-md-6 order-md-2">
						<img
							src={LoginImg}
							alt="Image"
							className="img-fluid"
						/>
					</div>
					<div className="col-md-6 contents">
						<div className="row justify-content-center">
							<div className="col-md-8">
								<div className="mb-4">
									<h3>
										<strong>Login</strong>
									</h3>
									<p className="mb-4">Ingresa con tu correo y contraseña</p>
								</div>
								<form
									action="#"
									method="post">
									<div className="form-group first">
										<label htmlFor="username">Correo</label>
										<input
											type="text"
											className="form-control"
											id="username"
										/>
									</div>
									<div className="form-group last mb-4">
										<label htmlFor="password">Contraseña</label>
										<input
											type="password"
											className="form-control"
											id="password"
										/>
									</div>
									<input
										type="submit"
										value="Ingresar"
										className="btn text-white btn-block btn-primary"
									/>
									<Link to="/register">
										<span className="d-block text-left my-4 text-muted">
											&mdash; ¿No tienes cuenta? Registrate &mdash;
										</span>
									</Link>
									<Link to="/">
										<span className="d-block text-left my-4 text-muted">
											&mdash; Inicio &mdash;
										</span>
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
