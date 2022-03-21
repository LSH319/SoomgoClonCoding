import React, { useEffect, useState } from 'react';
import Head from '../component/Head';
import Swiper from '../component/Swiper';
import Footer from '../component/Footer';

function Home(){
    
    return(
        <body>
            <Head />
            <Swiper />
            <Footer />
        </body>
    );
}

export default Home;