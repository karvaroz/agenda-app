import React from "react";

const EventBox = ({ event }) => {
	const { title, user } = event;

	return;
	<>
		<strong>{title} </strong>
		<span>{user.name} </span>
	</>;
};

export default EventBox;
