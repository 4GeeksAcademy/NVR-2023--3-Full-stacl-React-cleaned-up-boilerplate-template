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
			<div className="container-fluid m-0 g-0 p-0">
				<div className="Header pt-3 mb-5 d-flex align-items-center justify-content-between">
					<div className="logo">
						Solutioner
					</div>
					<div className="buttons">
						<button className="signinUser">Sign in</button>
						<button className="registerUser">Register</button>
					</div>
				</div>
				<div className="rowalign-items-center justify-content-center">
					<Carousel start={startSlide} end={endSlide} />
				</div>
				<div>
					<p className="text-success">footer</p>
				</div>
			</div>
		</>
	);
};
