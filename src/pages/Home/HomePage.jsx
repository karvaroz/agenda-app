import React from "react";
import CalendarImg from "../../assets/calendar.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<section className="container-fluid text-center">
			<img
				src={CalendarImg}
				alt="Image"
				className="object-cover h-50 w-50 align-self-center"
			/>

			<div className="mb-4 ">
				<h3>
					Bienvenide a <span>Agenda App</span>
				</h3>
				<p className="mb-4">
					Ten el control de tu tiempo, se más productivo registrando tus tareas
					en nuestro calendario y las de tu equipo.
				</p>
				<Link to="/login">
					<input
						type="button"
						value="Ingresar"
						className="btn btn-primary"
					/>
				</Link>
			</div>
		</section>
	);
};

export default HomePage;
