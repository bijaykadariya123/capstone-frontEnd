import { Link } from "react-router-dom";
import { useLoaderData, Form } from "react-router-dom";

function Forms (props){
    return(
        <div>
            <h2>Add an Item</h2>
            <Form method="post" action="/create">
                <input type="text" name="name" placeholder="Item Name"/><br/>
                <input type="number" name="price" placeholder="Item Price" step="0.01"/><br/>
                <input type="number" name="year" placeholder="Year"/><br/>
                <input type="text" name="image" placeholder="Item Image"/><br/>
                <input type="text" name="origin" placeholder="Item Origin"/><br/>
                <input type="number" name="available_items" placeholder="Item available" step="1"/><br/>
                <button>Add</button>
            </Form>
        </div>
    )
}
export default Forms
