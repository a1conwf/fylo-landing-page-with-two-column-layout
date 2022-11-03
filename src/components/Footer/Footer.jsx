import React from "react";

//Style
import "./Footer.scss";

//Logo and icons
import Logo from "../../assets/brand/logo-white.svg";
import iconPhone from "../../assets/svg/icon-phone.svg";
import iconEmail from "../../assets/svg/icon-email.svg";
import iconFacebook from "../../assets/svg/facebook-icon.svg";
import iconTwitter from "../../assets/svg/twitter-icon.svg";
import iconInstagram from "../../assets/svg/instagram-icon.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<a href="#!">
					<img src={Logo} alt="logo-img" className="footer__logo" />
				</a>

				<div className="footer__content">
					<ul className="footer__contacts">
						<li className="footer__contacts-item">
							<a href="tel:+1-543-123-4567">
								<img src={iconPhone} alt="icon-phone" />
								Phone: +1-543-123-4567
							</a>
						</li>
						<li className="footer__contacts-item">
							<a href="mailto:example@fylo.com">
								<img src={iconEmail} alt="icon-email" />
								example@fylo.com
							</a>
						</li>
					</ul>

					<ul className="footer__links">
						<li className="footer__links-item">
							<a href="#!">About us</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Jobs</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Press</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Blog</a>
						</li>
					</ul>

					<ul className="footer__links">
						<li className="footer__links-item">
							<a href="#!">Contact Us</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Terms</a>
						</li>
						<li className="footer__links-item">
							<a href="#!">Privacy</a>
						</li>
					</ul>

					<ul className="footer__socials">
						<li className="footer__socials-item">
							<a href="#!">
								<img src={iconFacebook} alt="icon-facebook" />
							</a>
						</li>
						<li className="footer__socials-item">
							<a href="#!">
								<img src={iconTwitter} alt="icon-facebook" />
							</a>
						</li>
						<li className="footer__socials-item">
							<a href="#!">
								<img src={iconInstagram} alt="icon-facebook" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
