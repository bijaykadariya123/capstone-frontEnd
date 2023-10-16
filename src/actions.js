import url from "./url";
import { redirect } from "react-router-dom";

// Create Action for Creating new Item

export const createAction = async({request})=>{
    const formData = await request.formData()
    const newItem = {
        name: formData.get("name"),
        price: formData.get("price"),
        year: formData.get("year"),
        image: formData.get("image"),
        origin: formData.get("origin"),
        available_items: formData.get("available_items")      
    }
    await fetch(url, {
        method: "post",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(newItem)
    })
    return redirect("/")
}

// Update Action for Updating new Item

export const updateAction = async({request, params})=>{
    const id = params.id
    const formData = await request.formData()
    const updateItem = {
        name: formData.get("name"),
        price: formData.get("price"),
        year: formData.get("year"),
        image: formData.get("image"),
        origin: formData.get("origin"),
        available_items: formData.get("available_items")
    }
    await fetch(url+id, {
        method: "put",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(updateItem)
    })
    return redirect(`/item/${id}`)
}

// Delete Action for deleting new Item

export const deleteAction = async({params})=>{
    const id = params.id
    await fetch(url+id,{
        method:"delete"
    })
    return redirect("/")
}
