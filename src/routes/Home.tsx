import Head from '../component/Head';
import Swiper from '../component/SwiperContainer';
import Footer from '../component/Footer';
import Category from '../component/Category';
import Minibanner from '../component/Minibanner';

function Home(){
    return(
        <div>
            <Head />
            <Swiper />
            <Category />
            <Minibanner />
            <Footer />
        </div>
    );
}

export default Home;