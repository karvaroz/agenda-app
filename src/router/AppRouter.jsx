import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AgendaPage from "../pages/agenda/AgendaPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/Home/HomePage";

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>
			<Route
				path="/login"
				element={<LoginPage />}
			/>
			<Route
				path="/register"
				element={<RegisterPage />}
			/>
			<Route
				path="/agenda"
				element={<AgendaPage />}
			/>
			<Route
				path="/*"
				element={<Navigate to="/" />}
			/>
		</Routes>
	);
};

export default AppRouter;
