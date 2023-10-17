import { Link } from "react-router-dom";
import { useLoaderData, Form } from "react-router-dom";

function Forms (props){
    return(
        <div className="addShopping">
            <div className="px-1.5 formItem">
                <h2>Post Item</h2>
                <Form method="post" action="/create">
                    <div className="createInput">
                        <input  className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm"type="text" name="name" placeholder="Item Name"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="price" placeholder="Item Price" step="0.01"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="year" placeholder="Year"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="image" placeholder="Item Image"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="origin" placeholder="Item Origin"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="available_items" placeholder="Item available" step="1"/><br/>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full px-2 py-1 rounded-md mx-1.5  mb-5 bg-green-900 hover:bg-green-600 transform scale-105 transition-transform duration-300">Add Item</button>
                    </div>
               
                </Form>
            </div>
        </div>
    )
}
export default Forms
