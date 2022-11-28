import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";

const BooksSliderItems = ({ slider }) => {
    return (
        <>
            <img src={slider?.volumeInfo?.imageLinks?.thumbnail} alt={slider?.volumeInfo?.title} />
            <span>{slider?.volumeInfo?.title}</span>
        </>
    );
};

const BooksSlider = ({ slider }) => {
    return (
		<>
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={50}
            // loop={true}
            // loopFillGroupWithBlank={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper line__first"
        >
            {slider &&
                slider.map((slider, idx) => (
                    <SwiperSlide className="bookAll__img" key={idx}>
                        <Link to={`/BooksResults/${slider?.volumeInfo?.industryIdentifiers?.identifier}`}>
                            <BooksSliderItems slider={slider} />
                        </Link>
                    </SwiperSlide>
                ))}
        </Swiper>
		<img src={ process.env.PUBLIC_URL + "/img/booksBar.svg"} alt="bookBar"></img>
		</>
    );
};

export default BooksSlider;