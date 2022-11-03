import React from "react";
import Form from "../Form/Form";

//Styles
import "./Header.scss";

//Logos and images
import Logo from "../../assets/brand/logo-dark.svg";
import heroImg from "../../assets/svg/illustration-1.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<a href="#!">
						<img src={Logo} alt="logo-img" className="header__logo" />
					</a>

					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__list-item">
								<a href="#!">Features</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Team</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Sign In</a>
							</li>
						</ul>
					</nav>
				</div>

				<section className="hero">
					<img src={heroImg} alt="hero-img" className="hero__img" />
					<div className="hero__content">
						<h1 className="hero__content-title">All your files in one secure location, accessible anywhere.</h1>
						<p className="hero__content-text">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>

						<Form className="form" placeholder="Enter your email..." btnText="Get Started" />
					</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
