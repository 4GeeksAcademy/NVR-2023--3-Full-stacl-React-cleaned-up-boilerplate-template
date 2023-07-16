import React, { useState } from "react";
import { Carousel } from "../component/carousel";

export const Home = () => {

	const [startSlide, setStartSlide] = useState(0);
	const [endSlide, setEndSlide] = useState(9);

	const handleSlideStreamChange = () => {
		return 0;
	};

	return (
		<>
			<div className="container-fluid">
				<div className="Header pt-3 my-3 d-flex align-items-center justify-content-between">
					<div className="logo">
						Solutioner
					</div>
					<div className="buttons d-flex flex-row">
						<span>
							<button className="signinUserButton">sign in</button>
						</span>
						<span>
							<button className="registerUserButton">register</button>
						</span>
					</div>
				</div>
				<div className="rowalign-items-center justify-content-center">
					<Carousel start={startSlide} end={endSlide} />
				</div>
				<div className="ms-5 mt-5 d-flex flex-row">
					<div>
						<span className="footerLink">
							Privacy Policy
						</span>
						<span className="footerLink">
							Cookies Policy
						</span>
						<span className="footerLink">
							Terms of Service
						</span>
						<span className="footerLink">
							Work with us
						</span>
						<span className="footerLink">
							info@solutioner.com
						</span>
						<span className="footerLink">
							©2023 Solutioner Systems. All Rights reserved.
						</span>
					</div>
					<div className="providerButtonsWrapper">
						<span >
							<button className="providerHoemButton"> provider sign-in</button>
						</span>
						<span>
							<button className="providerHoemButton">provider register</button>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
