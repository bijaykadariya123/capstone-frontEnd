import { useLoaderData, Form } from "react-router-dom";

function UpdateForm (props){
    const item = useLoaderData()

    return(
        <div>
            <h2 className="updateTitle" style={{textAlign:'center'}}>UPDATE</h2>
            <Form method="post" action={`/update/${item.id}`}>
            <div className="allInputUpdate">
                <input className="updateInput block w-full rounded-md border-0 py-1. px-1.5 text-gray-900 shadow-sm" type="text" name="name"  defaultValue={item.name}/><br/>
                <input className="updateInput block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="price" placeholder="Item Price" step="0.01" defaultValue={item.price}/><br/>
                <input className="updateInput block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="year" placeholder="Year" defaultValue={item.year}/><br/>
                <input className="updateInput block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="image" placeholder="Item Image" defaultValue={item.image}/><br/>
                <input className="updateInput block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="origin" placeholder="Item Origin" defaultValue={item.origin}/><br/>
                <input className="updateInput block w-full rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="number" name="available_items" placeholder="Item available" step="1"defaultValue={item.available_items}/><br/>
            </div>    
            <button className="updateButton cursor-wait px-2 py-1 rounded bg-green-900 hover:bg-green-600">UPDATE</button>
            </Form>
        </div>
    )
}
export default UpdateForm