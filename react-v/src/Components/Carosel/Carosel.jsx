import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselImageData } from "../../JS/data";

function CarouselComp(){

const [currentIndex, setCurrentIndex] = useState();

function handleChange(index) {
  setCurrentIndex(index);
}
const CarouselImages = CarouselImageData.map((image,i) => (
  <div key={i} className="swiperImages">
    <img src={'assets/slider_img/'+image.imgUrl} />
  </div>
));
return (
  <div className="swiperImg" >
    <Carousel
      showArrows={true}
      swipeable
      autoPlay={true}
      infiniteLoop={true}
      selectedItem={CarouselImageData[currentIndex]}
      onChange={handleChange}
      className="carousel-container"
    >
      {CarouselImages}
    </Carousel>
    </div>
  );
};
export default CarouselComp;


