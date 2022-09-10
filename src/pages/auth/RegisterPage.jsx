import React from "react";
import RegisterImg from "../../assets/register.svg";
import { Link } from "react-router-dom"

const RegisterPage = () => {
	return (
		<div className="content">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img
							src={RegisterImg}
							alt="Image"
							className="img-fluid"
						/>
					</div>
					<div className="col-md-6 contents">
						<div className="row justify-content-center">
							<div className="col-md-8">
								<div className="mb-4">
									<h3>Registrarte</h3>
									<p className="mb-4">
										Crea una cuenta, ingresando los siguientes datos
									</p>
								</div>
								<form
									action="#"
									method="post">
									<div className="form-group first">
										<label htmlFor="username">Usuario</label>
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
										value="Log In"
										className="btn btn-block btn-primary"
									/>
									<Link to="/login">
										<span className="d-block text-left my-4 text-muted">
											&mdash; ¿Ya tienes una cuenta? Ingresa &mdash;
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

export default RegisterPage;
