import Nav from "../components/nav";
import UpdateForm from "../components/updateForm";

import {Link,Form, useLoaderData } from "react-router-dom";

function Show (props){
    const item = useLoaderData()

    return(
    <>
        <Nav/>
        <div className="showDescriptionflex">
            <div>
                <img className ="showImage w-full transform hover:rotate-45 transition-transform duration-600 cursor-pointer" src={item.image} alt ={item.name}/>
            </div>
            <div>
                <div className=" showDetails px-4 sm:px-0">
                    <h3 className="text-2xl flex justify-center font-semibold  text-gray-300">Item Description </h3>
                </div>
                <div className="detailInfo mt-2 border-t border-gray-700">
                    <dl className="divide-y divide-gray-700">
                        <div className=" info px-2 py-3 grid grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="tableDefination  text-xl font-sm leading-5 text-gray-400">ITEM</dt>
                            <dd className="mt-1 text-sm px-4 leading-2 text-gray-400 sm:col-span-2 sm:mt-0">{item.name}</dd>
                        </div>
                        <div className="info px-4 py-3 grid grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="tableDefination text-xl font-sm leading-5 text-gray-400">PRICE</dt>
                            <dd className="mt-1 text-sm px-4 leading-2 text-gray-400 sm:col-span-2 sm:mt-0">${item.price}</dd>
                        </div>
                        <div className="info px-4 py-3 grid grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="tableDefination text-xl font-sm leading-5 text-gray-400">YEAR</dt>
                            <dd className="mt-1 text-sm  px-4 leading-2 text-gray-400 sm:col-span-2 sm:mt-0">{item.year}</dd>
                        </div>
                        <div className="info px-4 py-3 grid grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="tableDefination text-xl font-sm leading-5 text-gray-400">ORIGIN</dt>
                            <dd className="mt-1 text-sm  px-4 leading-2 text-gray-400 sm:col-span-2 sm:mt-0">{item.origin}</dd>
                        </div>
                        <div className="info px-4 py-3 grid grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="tableDefination text-xl font-sm  leading-5 text-gray-400">AVAILABLE</dt>
                            <dd className="mt-1 text-sm px-6 leading-2 text-gray-400 sm:col-span-2 sm:mt-0">{item.available_items}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <UpdateForm/>
        <div>
            <Form method="post" action={`/delete/${item.id}`}>
                <button className="deleteButton cursor-wait px-2 py-1 rounded bg-green-900 hover:bg-green-600">Delete</button>
            </Form>
        </div>









    </>
    )

    
}

{/*             <div style={{width:"350px", padding:"15px"}}>
                <div className="px-4 sm:px-0">
                    <h3 className="text-3xl flex justify-center font-semibold  text-gray-300">Item Description </h3>
                </div>
                <div className="mt-5 border-t border-gray-700">
                    <dl className="divide-y divide-gray-700">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="text-xl px-3 font-sm  leading-5 text-gray-400">Item</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{item.name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="text-xl px-3 font-sm leading-5 text-gray-400">Price</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{item.price}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="text-xl px-3 font-sm leading-5 text-gray-400">Year</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{item.year}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="text-xl px-3 font-sm leading-5 text-gray-400">Origin</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{item.origin}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-5 sm:px-0">
                            <dt className="text-xl px-3 font-sm  leading-5 text-gray-400">Available</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{item.available_items}</dd>
                        </div>
                    </dl>
                </div>
            </div>*/}

export default Show;

