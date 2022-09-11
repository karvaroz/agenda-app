import "./ModalBox.css";

import Modal from "react-modal";
import { useState } from "react";
import { addHours } from "date-fns";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

registerLocale("es", es)

const customStyles = {
	content: {
		top: "55%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

const ModalBox = () => {
	const [formValues, setFormValues] = useState({
		title: "Esto es un evento de prueba",
		notes: "Para ver si funciona",
		start: new Date(),
		end: addHours(new Date(), 2),
		bgColor: "rgba(255, 255, 255, 0.5)",
		user: {
			_id: "001",
			name: "Karina",
		},
	});

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const handleDateChange = (event, changing) => {
		setFormValues({
			...formValues,
			[changing]: event,
		});
	};

	const closeModal = () => {
		console.log("cerrar");
	};
	const modalIsOpen = () => {
		console.log("abierto");
	};

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			className="modal"
			overlayClassName="modal-fondo"
			closeTimeoutMS={200}>
			<h1> Nuevo evento </h1>
			<hr />
			<form className="container">
				<div className="form-group mb-2">
					<label>Fecha y hora inicio</label>
					<DatePicker
						dateFormat="dd/MM/yyyy p"
						selected={formValues.start}
						className="form-control"
						onChange={(e) => handleDateChange(e, "start")}
						showTimeSelect
						locale="es"
						timeCaption="Hora"
					/>
				</div>

				<div className="form-group mb-2">
					<label>Fecha y hora fin</label>
					<DatePicker
						minDate={formValues.start}
						selected={formValues.end}
						className="form-control"
						onChange={(e) => handleDateChange(e, "end")}
						dateFormat="dd/MM/yyyy p"
						showTimeSelect
						locale="es"
						timeCaption="Hora"
					/>
				</div>

				<hr />
				<div className="form-group mb-2">
					<label>Titulo y notas</label>
					<input
						type="text"
						className="form-control"
						placeholder="Título del evento"
						name="title"
						autoComplete="off"
						value={formValues.title}
						onChange={handleInputChange}
					/>
					<small
						id="emailHelp"
						className="form-text text-muted">
						Una descripción corta
					</small>
				</div>

				<div className="form-group mb-2">
					<textarea
						type="text"
						className="form-control"
						placeholder="Notas"
						rows="5"
						name="notes"
						value={formValues.notes}
						onChange={handleInputChange}></textarea>
					<small
						id="emailHelp"
						className="form-text text-muted">
						Información adicional
					</small>
				</div>

				<button
					type="submit"
					className="btn btn-outline-primary btn-block">
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};

export default ModalBox;
