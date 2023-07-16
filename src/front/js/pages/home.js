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
				<div className="mt-5 d-flex flex-row">
					<div>
						<span className="footerLinjs">
							privacy policy
						</span>
						<span className="footerLinjs">
							terms of service
						</span>
						<span className="footerLinjs">
							work with us
						</span>
						<span className="footerLinjs">
							info@solutioner.com
						</span>
					</div>
					<div>
						<span className="providerHoemButton">
							provider sign-in
						</span>
						<span className="providerHoemButton">
							provider register
						</span>
					</div>
					<div>
						<span>
							©2023 Solutioner Systems. All Rights reserved.
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
