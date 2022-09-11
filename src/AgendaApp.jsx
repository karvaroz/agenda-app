import React from "react";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/store";
import { Provider } from "react-redux"

const AgendaApp = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</Provider>
	);
};

export default AgendaApp;
