import Nav from "../components/nav";
import UpdateForm from "../components/updateForm";

import {Link,Form, useLoaderData } from "react-router-dom";

function Show (props){
    const item = useLoaderData()

    return(
    <>
        <Nav/>
        <div>
            <img style={{width:'100px', height:'100px'}} src={item.image} alt ={item.name}/>
            <h1>Name:{item.name}</h1>
            <h3>Price{item.price}</h3>
            <h3>Year:{item.year}</h3>
            <h3>Origin: {item.origin}</h3>
            <h3>Item available: {item.available_items}</h3>
        </div>
        <UpdateForm/>
        <div>
            <Form method="post" action={`/delete/${item.id}`}>
                <button className="px-2 py-1 rounded bg-green-900 hover:bg-green-600">Delete</button>
            </Form>
        </div>
    </>
    )
}

export default Show;

