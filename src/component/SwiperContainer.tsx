import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SwiperContainer(){
const imgs = ['img/banner-1.png','img/banner-2.png','img/banner-3.png'];

    return(
        <Swiper
            pagination={{
            type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            autoplay ={{delay:1000}}
            loop = {true}
            style ={{top:'72px'}}
        >
            {imgs.map((img,index) =>(
                <SwiperSlide key={index}>
                    <Link to='/'>
                        <img src={img} alt='슬라이드'/>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperContainer;