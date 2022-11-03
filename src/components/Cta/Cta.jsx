import React from "react";
import Form from "../Form/Form";

//Style
import "./Cta.scss";

const Cta = () => {
	return (
		<section className="cta">
			<div className="container">
				<div className="cta__info">
					<h3 className="cta__info-title">Get early access today</h3>
					<p className="cta__info-text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
				</div>
				<Form className="form" placeholder="email@example.com" btnText="Get Started For Free" />
			</div>
		</section>
	);
};

export default Cta;
