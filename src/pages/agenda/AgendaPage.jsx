import Navbar from "../../components/Navbar/Navbar";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import enUS from "date-fns/locale/en-US";

import { addHours, parse, startOfWeek, getDay, format } from "date-fns";

const locales = {
	"en-US": enUS,
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const events = [
	{
		title: "Esto es un evento de prueba",
		notes: "Para ver si funciona",
		start: new Date(),
		end: addHours(new Date(), 2),
		bgColor: "rgba(255, 255, 255, 0.5)",
		user: {
			_id: "001",
			name: "Karina",
		},
	},
];

const AgendaPage = () => {
	return (
		<>
			<Navbar />

			<Calendar
				className="p-5"
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{ height: "calc( 100vh - 200px)", width: "100vw" }}
			/>
		</>
	);
};

export default AgendaPage;
