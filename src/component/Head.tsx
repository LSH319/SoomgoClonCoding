import { Link } from 'react-router-dom';

import Search from "./Search";
import HeadNav from "./HeadNav";

function Head(){

    return(
        <div style={{display:'flex'}}>
            <Link to={'/'}>
                <img src="img/logo.svg" alt="로고" />
            </Link>
            <Search />
            <HeadNav />
        </div>
    );
}

export default Head;
