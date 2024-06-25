

'use client'

import React, { useContext, useEffect, useState } from "react";
import InvetoryContext from '../../context/InvetoryContext'

import { useRouter } from "next/navigation";
 
const Invetory = () => {


    const { newInvetoryCreate } = useContext(InvetoryContext);

    const [nameaccessory, setNameaccessory] = useState('')
    const [amount, setAmount] = useState('')
    const [added_stock, setAdded_stock] = useState('')

    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault();
        const createBranch = {
            nameaccessory,
            amount,
            added_stock,
        }
        newInvetoryCreate(createBranch)
        router.replace("/admin/invetory")
    }


    return (
        <section 
        style={{ maxWidth: "700px" }}
        className="main2 mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg">
            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block mb-1">Product Name</label>
                    <input
                        type="text"
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        placeholder="Branch Name"
                        name="nameaccessory"
                        value={nameaccessory}
                        onChange={(e) => setNameaccessory(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1"> Amount</label>
                    <input
                        type="text"
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        placeholder="Amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Quantity</label>
                    <input
                        type="text"
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        placeholder="Quantity"
                        name="added_stock"
                        value={added_stock}
                        onChange={(e) => setAdded_stock(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                >
                    Create Accessory
                </button>
            </form>
        </section>
    )
}

export default Invetory;