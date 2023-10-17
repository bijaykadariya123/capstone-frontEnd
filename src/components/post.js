
import { Link } from "react-router-dom";

function Post ({item}){

    return(
        <div>
            <Link to={`/item/${item.id}`}>
                    <img className="allItemImg" src={item.image} alt ={item.name}/>
                    <h3 className="itemNameIndex">{item.name}</h3>
            </Link>  
        </div>
    )
}

export default Post;