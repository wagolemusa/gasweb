'use client'

import React, { useContext, useEffect, useState } from "react";
import MainContext from '../../context/MainContext'
import { useRouter, useSearchParams } from "next/navigation";
 
const Branch = () => {


    const { newBranchCreate } = useContext(MainContext);

    const [branchName, setBranchName] = useState('')

    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        const createBranch = {
            branchName
        }
        newBranchCreate(createBranch)
        router.replace("/branch")
    }


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-8 py-8">
            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block mb-1"> Branch Name</label>
                    <input
                        type="text"
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        placeholder="Branch Name"
                        name="name"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                >
                    Create Branch
                </button>
            </form>
        </div>
    )
}

export default Branch;