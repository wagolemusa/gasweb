'use client'

import axios from "axios"
import React, { useEffect, useState, useContext, Suspense} from "react"
import queryString from 'query-string'
import Link from "next/link";
import CustromPagination from "../../layouts/CustromPagination";
import '../../layouts/styles.css'
import GasContext from "../../../context/GasContext";


const GetGasdata = (searchParams) => {

    const { deleteGas } = useContext(GasContext)

    const urlParams = {
        page: searchParams.page,
    };

    const searchQuery = queryString.stringify(urlParams)

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/gas?${searchQuery}`);
                setData(response.data);
            } catch(error){
                setError('Failed to fetch Data');
                console.error('Error fetching data', error)
            }
        }
        fetchData(searchParams)
    }, [])

    const deleteHandler = (id) => {
        deleteGas(id);
    }

    return (

        <Suspense className="customer relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className="text-3xl my-5 ml-4 font-bold">
                    ({ data?.productsCount}) <Link href="/admin/gas/new" className="btn btn-primary">Create Gas On Sale</Link>

                </h1>
            <table className="table w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cylinder Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Discount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Promotion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            seton
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
             
                    {data?.gasDeta?.map(( gass ) => (
                        
                        <tr className="bg-white">
                        <td className="px-6 py-2">{gass?.productName}</td>
                        <td className="px-6 py-2">{gass?.cylinderSize}</td>
                        <td className="px-6 py-2">{gass?.category}</td>
                        <td className="px-6 py-2">{gass?.price}</td>
                        <td className="px-6 py-2">{gass?.discount}</td>
                        <td className="px-6 py-2">{gass?.promotion}</td>
                        <td className="px-6 py-2">{gass?.seton}</td>
                        <td className="px-6 py-2">
                           
                            <div>
                            <Link
                                    href={`/admin/gas/${gass?._id}/upload_images`}
                                    className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                >
                                  
                                    {/* <i className="fa fa-image" aria-hidden="true"></i> */}
                                    Upload
                                </Link>

                                <Link
                                    href={`/admin/gas/${gass?._id}`}
                                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                >
                                    {/* <i className="fa fa-pencil" aria-hidden="true"></i> */}
                                    Edit
                                </Link>
                                <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                                    onClick={() => deleteHandler(gass?._id)}
                                >
                                    {/* <i className="fa fa-trash" aria-hidden="true"></i> */}
                                    Delete
                                </a>
                            </div>
                        </td>
                    </tr>
                    ))}
         
                </tbody>
            </table>


                    

            <div className="mb-6">
                <CustromPagination
                    resPerPage={data?.resPerPage}
                    productsCount={data?.filteredProductsCount}
                />
            </div>
        </Suspense>

    );
};



export default GetGasdata;



