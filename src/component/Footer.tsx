import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer(){

    return(
        <footer>
            <div className='inner'>
                <div style={{display:'flex'}}>
                    <div>
                        전화번호
                    </div>
                    <ul style={{display:'flex'}}>
                        <li>
                            숨고소개
                            <div>
                                <Link to={'/'}>링크</Link>
                            </div>
                        </li>
                        <li>
                            고객안내
                            <div>
                                <Link to={'/'}>링크</Link>
                            </div>
                        </li>
                        <li>
                            고수안내
                            <div>
                                <Link to={'/'}>링크</Link>
                            </div>
                        </li>
                        <li>
                            고객센터
                            <div>
                                <Link to={'/'}>링크</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    기타사항
                </div>
            </div>
        </footer>
    );
}

export default Footer;