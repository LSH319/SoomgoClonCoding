import { Link } from 'react-router-dom';

import Search from "./Search";
import HeadNav from "./HeadNav";
import '../css/Head.css';

function Head(){

    return(
        <head>
            <div className='inner'>
                <Link to={'/'}>
                    <img src="img/logo.svg" alt="로고" />
                </Link>
                <Search />
                <HeadNav />
            </div>
        </head>
    );
}

export default Head;
