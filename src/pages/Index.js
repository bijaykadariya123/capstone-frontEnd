import {Link, useLoaderData } from "react-router-dom";
import Post from "../components/post";
import Nav from "../components/nav";
import Forms from "../components/form";


function Index (props){
   const items = useLoaderData()
    return<>
        <Nav/>
        <Forms/>
        <div>
            {items.map((item)=> {return <Post key = {item.id} item={item}/>})} 
        </div>


</>
}

export default Index;