import React from "react";
import {useState} from "react";

//Style
import "./Form.scss";

const Form = (props) => {
	const [emailValue, setEmailValue] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailRegex = /\S+@\S+\.\S+/;

		if (emailValue === "") {
			setError("Oops! Please add your email");
		} else if (!emailValue.match(emailRegex)) {
			setError("Oops! That doesn’t look like an email address");
		} else {
			setError(null);
		}
	};

	return (
		<form className={error ? "form error" : "form"} onSubmit={handleSubmit}>
			<div className="form__input">
				<input type="text" placeholder={props.placeholder} value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
				<p className="error__text">{error}</p>
			</div>
			<button className="btn">{props.btnText}</button>
		</form>
	);
};

export default Form;
