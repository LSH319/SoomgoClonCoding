import { useState } from "react";

function Search(){
    const keywords = ['영어 과외','PT','보컬레슨','리모델링','시공','수리','인테리어','과외','골프 레슨','수도 설치'];

    const [serachBarFocus, setSearchBarFocus] = useState(false);

    const abc = function(){
        setSearchBarFocus(true);
    }

    const aaa = function(){
        setSearchBarFocus(false);
    }

    return(
        <div className='search'>
            <input 
                type={'text'}
                placeholder={'어떤 서비스가 필요하세요?'}
                className='searchBar'
                onFocus= {abc}
                onBlur={aaa}
            />
            <div className='dropBox'>
                    <ul className='tapNav'>
                        <li className="tapKeyWords">인기 키워드</li>
                        <li className="tapService">최근 검색한 서비스</li>
                    </ul>
                    <ul className="keywords">
                        {keywords.map(
                            (keywords) => (
                            <li key={keywords}>{keywords}</li>
                        ))}
                    </ul>
                    <div className='dropBoxFooter'>
                        <div>전체 삭제</div>
                        <div>닫기</div>
                    </div>
                </div>
            {/* {serachBarFocus? 
                <div className='dropBox'>
                    <ul className='tapNav'>
                        <li className="tapKeyWords">인기 키워드</li>
                        <li className="tapService">최근 검색한 서비스</li>
                    </ul>
                    <ul className="keywords">
                        {keywords.map(
                            (keywords) => (
                            <li key={keywords}>{keywords}</li>
                        ))}
                    </ul>
                    <div className='dropBoxFooter'>
                        <div>전체 삭제</div>
                        <div>닫기</div>
                    </div>
                </div>
            :null} */}
            {/* {serachBarFocus ? <DropBox {...keywords}/>:null} */}
        </div>
    );
}

export default Search;