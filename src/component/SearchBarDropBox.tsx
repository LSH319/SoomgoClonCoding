import { useState } from "react";
import { useRef } from "react";

interface data{
    keywords:string[]
    searchRef:React.RefObject<HTMLInputElement>
}

function DropBox(props:data){

    const [tapNav,setTapNav] = useState(true);

    const test = function(){
        if(props.searchRef.current !== null){
            props.searchRef.current.focus();
            console.log(props.searchRef.current);
            props.searchRef.current.focus();
        }
    }

    return(
        <div className='dropBox'>
            <div className="dropBoxBody">
                <ul className='tapNav'>
                    <li onClick={test} className={`${tapNav? 'active':''}`}>인기 키워드</li>
                    <li onClick={test} className={`${tapNav? '':'active'}`}>최근 검색한 서비스</li>
                </ul>
                <ul className="keywords">
                    {props.keywords.map(
                        (keyword) => (
                        <li key={keyword}>{keyword}</li>
                    ))}
                </ul>
            </div>
            <div className='dropBoxFooter'>
                <div>전체 삭제</div>
                <div onClick={test}>닫기</div>
            </div>
        </div>
    );
}

export default DropBox;