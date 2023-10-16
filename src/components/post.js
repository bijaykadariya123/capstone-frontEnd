
import { Link } from "react-router-dom";

function Post ({item}){

    const stylingPost = {
        textAlign: 'center',
        border: '3px solid',
        margin:'10px auto',
        width:'80%'

    }
    return(
        <div style={stylingPost}>
            <Link to={`/item/${item.id}`}>
                    <img style={{width:'100px', height:'100px'}} src={item.image} alt ={item.name}/>
                    <h3>{item.name}</h3>
            </Link>
            
        </div>
    )
}

export default Post;