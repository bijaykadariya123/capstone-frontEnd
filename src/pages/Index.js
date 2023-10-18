import {Link, useLoaderData } from "react-router-dom";
import Post from "../components/post";
import Nav from "../components/nav";
import Forms from "../components/form";
import Carousel from "../components/carousel";
import Footer from "../components/footer";


function Index (props){
   const items = useLoaderData()
   const imagesArray = items.map((item) => item.image);

    return<>
        <Nav/>
        <div  className="formSale">
            <div className="carouselContainer">
                <h2 className='animate-typing text-2xl carouselLabel text-red-800'>Items on Sale !!!</h2>
                <Carousel images={imagesArray} /> 
            </div>
            <Forms className="indexFormAll"/>     
        </div>
            
        <h1 className="itemList marquee">All Item</h1>
        <div  className="allItems">
            {items.map((item)=> {return <Post key = {item.id} item={item}/>})} 
        </div>
        <Footer/>

        


</>
}

export default Index;


