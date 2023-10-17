
import { Link } from "react-router-dom";

function Post ({item}){

    return(
        <div>
            <Link to={`/item/${item.id}`}>
                    <img style={{width:'100px', height:'100px'}} src={item.image} alt ={item.name}/>
                    <h3>{item.name}</h3>
            </Link>
            
        </div>
    )
}

export default Post;