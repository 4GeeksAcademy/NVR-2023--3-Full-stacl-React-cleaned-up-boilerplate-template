import React from "react";

export const Carousel = ({ start, end }) => {
    // Saved version

    const slides = [
        {
            content: "A stubborn pipe?\n A pesky hornet's nest?\nWe got you covered",
            background: "rgb(1, 36, 4)",
            color: "rgb(226, 224, 157)",
            class1: "class1",
            class2: "class2",
            class3: "class3",
            video: ""
        },
        {
            content: "Over 50 home services a click away",
            background: "rgb(1, 36, 4)",
            color: "rgb(226, 224, 157)",
            class1: "class4",
            class2: "class5",
            class3: "class6",
            video: ""
        },
        {
            content: "",
            background: "green",
            color: "rgb(226, 224, 157)",
            class1: "class4",
            class2: "class5",
            class3: "class6",
            video: "https://res.cloudinary.com/dzow47vf1/video/upload/v1689455169/03%20Video/01_Painter_Golden.mp4"
        },

        {
            content: "What you want\n When you want it\n Where you want it\n",
            background: "rgb(1, 36, 4)",
            color: "rgb(226, 224, 157)",
            class1: "firstWordItalic",
            class2: "firstWordItalic",
            class3: "firstWordItalic",
            video: ""
        },
        {
            content: "Dog Walking 25% off summer sale kicking off in August",
            background: "rgb(1, 36, 4)",
            color: "rgb(226, 224, 157)",
            class1: "class10",
            class2: "class11",
            class3: "class12",
            video: ""
        },
        {
            content: "Certified professionals?\n Seasoned experts?\n We got them",
            background: "rgb(1, 36, 4)",
            color: "rgb(226, 224, 157)",
            class1: "class13",
            class2: "class14",
            class3: "class15",
            video: ""
        },
        {
            content: "Need extra security? \nSafeguard your services in quick easy steps",
            background: "#24194f",
            color: "#dcdae6",
            class1: "class16",
            class2: "class17",
            class3: "class18",
            video: ""
        },
        {
            content: "",
            background: "rgb(27, 27, 27)",
            color: "rgb(226, 224, 157)",
            class1: "class19",
            class2: "class20",
            class3: "class21",
            video: "https://res.cloudinary.com/dzow47vf1/video/upload/v1689455165/03%20Video/02_Gardening_Golden.mp4"
        },
        {
            content: "20% off on your first service",
            background: "#f5da42",
            color: "darkgreen",
            class1: "class22",
            class2: "class23",
            class3: "class24",
            video: ""
        },
        {
            content: "",
            background: "darkgreen",
            color: "purple",
            class1: "class25",
            class2: "class26",
            class3: "class27",
            video: "https://res.cloudinary.com/dzow47vf1/video/upload/v1689457311/03%20Video/03b_Massage_-_Golden_gnhoaq.mp4"
        },
        {
            content: "",
            background: "darkgreen",
            color: "purple",
            class1: "class28",
            class2: "class29",
            class3: "class30",
            video: "https://res.cloudinary.com/dzow47vf1/video/upload/v1689449999/03%20Video/03_massage-bw_-cropped_phrpjq.mp4"
        }
    ];

    const selectedSlides = slides.slice(start, end + 1);

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

    // Pre-processing slide content

    const formatContent = (content) => {
        const lineBreakSequence = "\n";
        const lines = content.split(lineBreakSequence);
        return lines.map((line, index) => (
            <div key={index} className={`class${index % 3 + 1}`}>
                {line}
            </div>
        ));
    };

    return (
        <>
            <div id="slideCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2100">
                <div className="carousel-inner mx-0 px-0" role="listbox">
                    {selectedSlides.map((slide, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="col-md-3">
                                <div className="">
                                    <div className="">
                                        <div className={`slideWrapper ${slide.class}`} style={{ height: "15rem", background: slide.background, color: slide.color }}>
                                            {slide.video !== "" ? (
                                                <video src={slide.video} autoPlay muted loop className="slideVideo" />
                                            ) : (
                                                <div className="slideContent">{formatContent(slide.content)}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="controlsWrapper pt-6 mt-6">
                    <span className="" href="#slideCarousel" role="button" data-bs-slide="prev">
                        <span className="carousselPreviousControl text-success" aria-hidden="true" />
                        previous
                    </span>
                    <span className="" href="#slideCarousel" role="button" data-bs-slide="next">
                        <span className="carousselNextControl text-success" aria-hidden="true">
                            next
                        </span>
                    </span>
                </div>
            </div>
        </>
    );

}




