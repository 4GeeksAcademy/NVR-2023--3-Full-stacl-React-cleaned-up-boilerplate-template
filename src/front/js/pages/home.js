import React, { useSTate } from "react";

export const Home = () => {
	const slides = [
		[
			{ content: "service1", background: "#FFD700", color: "white"},
			{ content: "service2", background: "green", color: "white"},
			{ content: "service3", background: "grey", color: "white"},
			{ content: "service4", background: "blue", color: "white"},
			{ content: "service5", background: "darkgreen", color: "white"},
			{ content: "service6", background: "#FFD700", color: "black"},
			{ content: "service7", background: "chocolate", color: "green"},
		],
		
		[
			{ content: "provider1", background: "yellow", color: "white"},
			{ content: "provider2", background: "yellow", color: "white"},
			{ content: "provider3", background: "yellow", color: "white"},
			{ content: "provider4", background: "yellow", color: "white"},
			{ content: "provider5", background: "yellow", color: "white"},
			{ content: "provider6", background: "yellow", color: "white"},
			{ content: "provider7", background: "yellow", color: "white"},
		],

		[
			{ content: "price1", background: "yellow", color: "white"},
			{ content: "price2", background: "yellow", color: "white"},
			{ content: "price3", background: "yellow", color: "white"},
			{ content: "price4", background: "yellow", color: "white"},
			{ content: "price5", background: "yellow", color: "white"},
			{ content: "price6", background: "yellow", color: "white"},
			{ content: "price7", background: "yellow", color: "white"},
		],
		
		
	];

	let slideIndex = 0;

	// inherited code
	let items = document.querySelectorAll('.carousel .carousel-item');
	items.forEach((el) => {
		const minPerSlide = 4;
		let next = el.nextElementSibling;
		for (let i = 1; i < minPerSlide; i++) {
			if (!next) {
				next = items[0];
			}
			let cloneChild = next.cloneNode(true);
			el.appendChild(cloneChild.children[0]);
			next = next.nextElementSibling;
		}
	});
	// inherited code

	return (
		<>
			<div className="container-fluid mx-0 gx-0 px-0 my-3">
				<div className="row vh-100 align-items-center justify-content-center">
					<div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2100">
						<div className="carousel-inner mx-0 px-0" role="listbox">
							{slides[slideIndex].map((slide, index) => (
								<div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
									<div className="col-md-3">
										<div className="card rounded-0 border-0">
											<div className="card-img">
												<div className="slideWrapper" style={{ height: "480px", background: slide.background, color: slide.color }}>
													<div className="slideContent">
														{slide.content}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<a
							className="carousel-control-prev bg-transparent w-aut"
							href="#recipeCarousel"
							role="button"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
						</a>
						<a
							className="carousel-control-next bg-transparent w-aut"
							href="#recipeCarousel"
							role="button"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
