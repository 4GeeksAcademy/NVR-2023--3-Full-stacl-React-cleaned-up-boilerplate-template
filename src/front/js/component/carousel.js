import React from "react";

export const Carousel = ({start, end }) => {
    
    const slides = [
		{ content: "service1", background: "rgb(27,27,27)", color: "rgb(226, 224, 157)", class: "service1" },
		{ content: "service2", background: "green", color: "rgb(226, 224, 157)", class: "service2" },
		{ content: "service3", background: "rgb(27, 27, 27)", color: "rgb(226, 224, 157)", class: "service3" },
		{ content: "service4", background: "rgb(27, 27, 27)", color: "rgb(226, 224, 157)", class: "service4" },
		{ content: "service5", background: "darkgreen", color: "rgb(226, 224, 157)", class: "service5" },
		{ content: "service6", background: "rgb(27, 27, 27)", color: "rgb(226, 224, 157)", class: "service6" },
		{ content: "service7", background: "chocolate", color: "green", class: "service7" },
		{ content: "service8", background: "darkgreen", color: "purple", class: "service8" },
		{ content: "service9", background: "darkgreen", color: "purple", class: "service9" },
		{ content: "provider1", background: "yellow", color: "white", class: "provider11" },
		{ content: "provider2", background: "yellow", color: "white", class: "provider12" },
		{ content: "provider3", background: "yellow", color: "white", class: "provider13" },
		{ content: "provider4", background: "yellow", color: "white", class: "provider14" },
		{ content: "provider5", background: "yellow", color: "white", class: "provider15" },
		{ content: "provider6", background: "yellow", color: "white", class: "provider16" },
		{ content: "provider7", background: "yellow", color: "white", class: "provider17" },
		{ content: "price1", background: "yellow", color: "white" },
		{ content: "price2", background: "yellow", color: "white" },
		{ content: "price3", background: "yellow", color: "white" },
		{ content: "price4", background: "yellow", color: "white" },
		{ content: "price5", background: "yellow", color: "white" },
		{ content: "price6", background: "yellow", color: "white" },
		{ content: "price7", background: "yellow", color: "white" },
	];
    
    const selectedSlides = slides.slice(start, end+1);

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
            <div id="slideCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2100">
                <div className="carousel-inner mx-0 px-0" role="listbox">
                    {selectedSlides.map((slide, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="col-md-3">
                                <div className="card rounded-0 border-0">
                                    <div className="">
                                        <div className={`slideWrapper ${slide.class}`} style={{ height: "15rem", background: slide.background, color: slide.color }}>
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
            </div>
        </>
    );

}



{/* <a
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
</div> */}