import Navbar from "../../components/Navbar/Navbar";
import EventBox from "../../components/EventBox/EventBox";
import ModalBox from "../../components/ModalBox/ModalBox";

import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/agendaLocalizer";
import { getMessages } from "../../helpers/getMessages";
import { useState } from "react";


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
	const [lastView, setLastView] = useState(
		localStorage.getItem("LastView") || "week"
	);
	const eventStyleGetter = (event, start, end, isSelected) => {};

	const onDoubleClick = (event) => {
		console.log({ doubleClick: event });
	};

	const onSelect = (event) => {
		console.log({ click: event });
	};

	const onViewChanged = (event) => {
		localStorage.setItem("LastView", event);
	};

	return (
		<>
			<Navbar />

			<Calendar
				culture="es"
				className="p-3"
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{ height: "calc( 100vh - 100px)", width: "100vw" }}
				messages={getMessages()}
				eventPropGetter={eventStyleGetter}
				// components={{
				// 	event: EventBox,
				// }}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
				defaultView={lastView}
			/>
			<ModalBox />
		</>
	);
};

export default AgendaPage;
