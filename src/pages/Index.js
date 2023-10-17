import {Link, useLoaderData } from "react-router-dom";
import Post from "../components/post";
import Nav from "../components/nav";
import Forms from "../components/form";
import Carousel from "../components/carousel";


function Index (props){
   const items = useLoaderData()
   const imagesArray = items.map((item) => item.image);

    return<>
        <Nav/>
        <div  className="formSale">
            <div>
                <h2 className='animate-typing text-xl'>Items on Sale</h2>
               <Carousel className="h-full" images={imagesArray} /> 
            </div>
        <Forms/>
            {/* <div>
                {items.map((item) => (<Carousel key={item.id} item={item} />))}
            </div> */}
            {/* <div>
                {items.map((item) => <Carousel key={item.id} item={items} />)}
            </div> */}
            
          
        </div>
            
        <div>
            {items.map((item)=> {return <Post key = {item.id} item={item}/>})} 
        </div>

        


</>
}

export default Index;