import React from 'react';

export const Home = () => {

	let items = document.querySelectorAll('.carousel .carousel-item')

	items.forEach((el) => {
		const minPerSlide = 4
		let next = el.nextElementSibling
		for (var i = 1; i < minPerSlide; i++) {
			if (!next) {
				next = items[0]
			}
			let cloneChild = next.cloneNode(true)
			el.appendChild(cloneChild.children[0])
			next = next.nextElementSibling
		}
	})

	return (
		<>
			<div className="container-fluid mx-0 gx-0 px-0 my-3">
				<div className="row d-flex justify-content-center vh-100 d-flex align-items-center">
					<div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2100">
						<div className="carousel-inner mx-0 px-0" role="listbox">
							<div className="carousel-item active">
								<div className="col-md-3">
									<div className="card rounded-0 border-0">
										<div className="card-img">
											<div className="bg-primary" style={{ height: "480px"}}></div>
										</div>
										<div className="card-img-overlay">Slide 1</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-md-3">
									<div className="card rounded-0 border-0">
										<div className="card-img">
											<div className="bg-success" style={{ height: "480px"}}></div>
										</div>
										<div className="card-img-overlay">Slide 2</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-md-3">
									<div className="card rounded-0 border-0 ">
										<div className="card-img">
											<div className="bg-primary" style={{ height: "480px"}}></div>
										</div>
										<div className="card-img-overlay">Slide 3</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-md-3">
									<div className="card rounded-0 border-0">
										<div className="card-img">
											<div className="bg-success" style={{ height: "480px"}}></div>
										</div>
										<div className="card-img-overlay">Slide 4</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-md-3">
									<div className="card rounded-0 border-0">
										<div className="card-img">
											<div className="bg-primary" style={{ height: "480px"}}></div>
										</div>
										<div className="card-img-overlay">Slide 5</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-md-3">
									<div className="card rounded-0 border-0">
										<div className="card-img">
											<div className="bg-success" style={{ height: "480px"}}></div>
										</div>
										<div className="card-img-overlay">Slide 6</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-md-3">
									<div className="card rounded-0 border-0">
										<div className="card-img">
											<div className="bg-danger" style={{ height: "480px"}}></div>
										</div>
										<div className="card-img-overlay">Slide 7</div>
									</div>
								</div>
							</div>
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

