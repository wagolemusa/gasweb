'use client'

import React, { useContext, useState} from "react";
// import MainContext from '../../context/MainContext'
import CompanyContext from '../../context/CompanyContext'

import { useRouter } from "next/navigation";


const Company = () => {

    const { newCompanyCreate } = useContext(CompanyContext);

    const [ companyName, setCompanyName] = useState('')

    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        const createComapany = {
            companyName
        }
        newCompanyCreate(createComapany)
        router.replace("/admin/company")
    }


    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-8 py-8">
        <form onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block mb-1"> Company Name</label>
                <input
                    type="text"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Company Name"
                    name="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />
            </div>


            <button
                type="submit"
                className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
            >
                Create Company
            </button>
        </form>
    </div>
        
    )
}

export default Company;



