import { Link } from "react-router-dom";
import { useLoaderData, Form } from "react-router-dom";

function Forms (props){
    return(
        <div className="addShopping">
            <div className="px-1.5">
                <h2> Add Item</h2>
                <Form method="post" action="/create">
                    <input  className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm"type="text" name="name" placeholder="Item Name"/><br/>
                    <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="price" placeholder="Item Price" step="0.01"/><br/>
                    <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="year" placeholder="Year"/><br/>
                    <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="image" placeholder="Item Image"/><br/>
                    <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="origin" placeholder="Item Origin"/><br/>
                    <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="available_items" placeholder="Item available" step="1"/><br/>
                    <button className="px-2 py-1 rounded bg-green-900 hover:bg-green-600 transform scale-105 transition-transform duration-300">Add Item</button>
                </Form>
            </div>
        </div>
    )
}
export default Forms
