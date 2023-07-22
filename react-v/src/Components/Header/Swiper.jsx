import React, { useEffect } from "react";
import cat from '../../assets/slider_img/cat.jpg'; 
import dog from '../../assets/slider_img/dog.jpg'; 
import hamster1 from '../../assets/slider_img/hamster1.jpg'; 
import dog1 from '../../assets/slider_img/dog1.jpg'; 
import hamster from '../../assets/slider_img/hamster.jpg'; 

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Swip(){
  return (
  <div className="swiperImg">
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    //   spaceBetween={50}
    //   slidesPerView={3}
    autoplay
    navigation
    virtual
    pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{zIndex : -100}}
    >
      <SwiperSlide><img src={cat} alt="" srcset="" className="mw100 mh100"/></SwiperSlide>
      <SwiperSlide> <img src={dog} alt="" srcset="" className="mw100 mh100"/> </SwiperSlide>
      <SwiperSlide><img src={hamster1} alt="" srcset="" className="mw100 mh100"/></SwiperSlide>
      <SwiperSlide> <img src={dog1} alt="" srcset="" className="mw100 mh100"/></SwiperSlide>
      <SwiperSlide><img src={hamster} alt="" srcset="" className="mw100 mh100"/></SwiperSlide>
    </Swiper>
    </div>
  );
};
register();
export default Swip;


