import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";

const MainSliderItems = ({images}) => {
    return (
        <Link to={`https://books.google.co.kr/books?id=${images?.id}`}>
            <img
                src={images?.volumeInfo?.imageLinks?.thumbnail}
                alt=""
            />
            <span>{images?.volumeInfo?.title}</span>
        </Link>
    )
}

const MainSlider = ({images}) => {
    return (
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
            className="mySwiper"
        >
            {images && images.map((images, idx) => (
                <SwiperSlide className="book-1" key={idx}>
                    <MainSliderItems
                        images={images}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSlider;