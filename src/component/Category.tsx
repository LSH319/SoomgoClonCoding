import { Link } from "react-router-dom";

function Category(){
    const categoryItems = [['레슨','','/'],['홈/리빙','','/'],['이벤트','','/'],['비즈니스','','/'],['디자인/개발','','/'],['건강/미용','','/'],['알바','','/'],['기타','','/']];
    return(
        <ul>
            {categoryItems.map(
                (categoryItem)=>(
                    <Link to={categoryItem[2]} key={categoryItem[0]}>
                        <li>
                            <div style={{display:'flex'}}>
                                <img src={categoryItem[1]} alt="카테고리이미지" />
                                <p>{categoryItem[0]}</p>
                            </div>
                        </li>
                    </Link>
                ))}
        </ul>
    );
}

export default Category;