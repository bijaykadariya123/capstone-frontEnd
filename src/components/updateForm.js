import { useLoaderData, Form } from "react-router-dom";

function UpdateForm (props){
    const item = useLoaderData()

    return(
        <div>
            <h2>Add an Item</h2>
            <Form method="post" action={`/update/${item.id}`}>
                <input type="text" name="name"  defaultValue={item.name}/><br/>
                <input type="number" name="price" placeholder="Item Price" step="0.01" defaultValue={item.price}/><br/>
                <input type="number" name="year" placeholder="Year" defaultValue={item.year}/><br/>
                <input type="text" name="image" placeholder="Item Image" defaultValue={item.image}/><br/>
                <input type="text" name="origin" placeholder="Item Origin" defaultValue={item.origin}/><br/>
                <input type="number" name="available_items" placeholder="Item available" step="1"defaultValue={item.available_items}/><br/>
                <button>update</button>
            </Form>
        </div>
    )
}
export default UpdateForm