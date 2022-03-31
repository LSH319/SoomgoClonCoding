import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/ServiceSwiper.css';

interface serviceData{
    linkURL:string[],
    imgURL:string[],
    tagText?:string[],
    titleText?:string[],
    offerText?:string[]
}

function ServiceSwiper(props:serviceData){

    return(
        <div className='service'>
            <Swiper
                navigation
                modules={[Navigation]}
                slidesPerView={4}
                slidesPerGroup={2}
                spaceBetween={15}
                touchRatio={0}
                className = 'serviceSwiper'
                speed={500}
            >
                {props.linkURL.map((linkURL,index)=>(
                    <SwiperSlide key={index}>
                        <Link to={props.linkURL[index]}>
                            <img src={props.imgURL[index]} alt="slideimg" className='serviceImg'/>
                            {props.tagText? 
                            <p className='serviceTag'>
                                {props.tagText[index]}
                            </p>:
                            null }
                            {props.titleText? 
                            <p className='serviceTitle'>
                                {props.titleText[index]}
                            </p>:
                            null }
                            {props.offerText? 
                            <p className='serviceOffer'>
                                {props.offerText[index]}
                            </p>:
                            null }
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ServiceSwiper;