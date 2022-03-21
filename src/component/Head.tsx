import Search from "./Search";
import HeadNav from "./HeadNav";

function Head(){

    return(
        <div style={{display:'flex'}}>
            <img src="img/logo.svg" alt="로고" />
            <Search />
            <HeadNav />
        </div>
    );
}

export default Head;
