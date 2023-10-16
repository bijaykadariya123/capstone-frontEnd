import url from "./url";

// Index Route
export const indexLoader = async()=>{
    const response = await fetch(url)
    const items = await response.json()
    return items
}

// Show loader to load a single Item

export const showLoader = async({params})=>{
    const id = params.id
    const response = await fetch(url + id)
    const item = await response.json()
    return item
}