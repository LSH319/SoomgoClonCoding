
function Search(){
    const keywords = ['영어 과외','PT','보컬레슨','리모델링','시공','수리','인테리어']; 
    return(
        <div>
            <input 
                type={'text'}
                placeholder={'어떤 서비스가 필요하세요?'} 
            />
            <div style={{display:'none'}}>
                <div style={{display:'flex'}}>
                    <div>인기 키워드</div>
                    <div>최근 검색한 서비스</div>
                </div>
                <ul>
                    {keywords.map(
                        (keyword) => (
                        <li key={keyword}>{keyword}</li>
                    ))}
                </ul>
                <div style={{display:'flex'}}>
                    <div>전체 삭제</div>
                    <div>닫기</div>
                </div>
            </div>
        </div>
    );
}

export default Search;