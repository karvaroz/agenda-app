import React from "react";

const Navbar = () => {
	return (
		<header
			id="header"
			className="fixed-top navbar navbar bg-dark mb-4 px-4">
			<span className="navbar-brand text-white">
				<ion-icon name="calendar-outline"></ion-icon>
				&nbsp; Karina
			</span>
			<button>
				<ion-icon name="log-out-outline"></ion-icon>
				&nbsp;
				<span>Salir</span>
			</button>
		</header>
	);
};

export default Navbar;
