import { useLoaderData, Form } from "react-router-dom";

function UpdateForm (props){
    const item = useLoaderData()

    return(
        <div>
            <h2>Add an Item</h2>
            <Form method="post" action={`/update/${item.id}`}>
                <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="name"  defaultValue={item.name}/><br/>
                <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="price" placeholder="Item Price" step="0.01" defaultValue={item.price}/><br/>
                <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="year" placeholder="Year" defaultValue={item.year}/><br/>
                <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="image" placeholder="Item Image" defaultValue={item.image}/><br/>
                <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="origin" placeholder="Item Origin" defaultValue={item.origin}/><br/>
                <input className="block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="available_items" placeholder="Item available" step="1"defaultValue={item.available_items}/><br/>
                <button className="px-2 py-1 rounded bg-green-900 hover:bg-green-600">update</button>
            </Form>
        </div>
    )
}
export default UpdateForm