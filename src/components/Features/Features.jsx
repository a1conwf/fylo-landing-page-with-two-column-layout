import React from "react";

//Style
import "./Features.scss";

//Images and icons
import featuresImg from "../../assets/svg/illustration-2.svg";
import quoteImg from "../../assets/svg/icon-quotes.svg";
import avatarImg from "../../assets/img/avatar-testimonial.jpg";

const Features = () => {
	return (
		<section className="features">
			<div className="container">
				<img src={featuresImg} alt="features-img" className="features__img" />

				<div className="features__content">
					<h2 className="features__content-title">Stay productive, wherever you are</h2>
					<ul>
						<li>
							<p className="features__content-text">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>{" "}
						</li>
						<li>
							<p className="features__content-text">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>{" "}
						</li>
					</ul>

					<div className="features__content-cta">
						<span>See how Fylo works</span>
					</div>

					<div className="testimonial">
						<img class="testimonial__quotes" src={quoteImg} alt="quote-img" />
						<p className="testimonial__text">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
						<div className="testimonial__avatar">
							<img src={avatarImg} alt="profile-img" />
							<div className="testimonial__avatar-info">
								<span className="testimonial__avatar-info-name">Kyle Burton</span>
								<span className="testimonial__avatar-info-position">Founder & CEO, Huddle</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
