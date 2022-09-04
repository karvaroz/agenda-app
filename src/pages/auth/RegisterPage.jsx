import React from "react";
import RegisterImg from "../../assets/register.svg";
import { Link } from "react-router-dom"

const RegisterPage = () => {
	return (
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<img
							src={RegisterImg}
							alt="Image"
							class="img-fluid"
						/>
					</div>
					<div class="col-md-6 contents">
						<div class="row justify-content-center">
							<div class="col-md-8">
								<div class="mb-4">
									<h3>Registrarte</h3>
									<p class="mb-4">
										Crea una cuenta, ingresando los siguientes datos
									</p>
								</div>
								<form
									action="#"
									method="post">
									<div class="form-group first">
										<label for="username">Usuario</label>
										<input
											type="text"
											class="form-control"
											id="username"
										/>
									</div>
									<div class="form-group last mb-4">
										<label for="password">Contraseña</label>
										<input
											type="password"
											class="form-control"
											id="password"
										/>
									</div>

									<input
										type="submit"
										value="Log In"
										class="btn btn-block btn-primary"
									/>
									<Link to="/login">
										<span class="d-block text-left my-4 text-muted">
											&mdash; ¿Ya tienes una cuenta? Ingresa &mdash;
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
