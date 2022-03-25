
function HeadNav(){
    return(
        <div style={{display:'flex'}} className='headNav'>
            <ul style={{display:'flex'}}>
                <li>
                    고수찾기
                </li>
                <li>
                    바로구매
                </li>
                <li>
                    로그인
                </li>
                <li>
                    회원가입
                </li>
            </ul>
            <button>고수가입</button>
        </div>
    );
}

export default HeadNav;