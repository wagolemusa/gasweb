'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Promocode = () => {

    const [amount, setAmount] = useState('')
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        const createProm = {
            amount
        }

        console.log("accesory", createProm)
        try {
            const response = await axios.post("http://localhost:3000/api/admin/promocode", createProm, {
               
           
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            

            if (response.status === 201) {
                window.location.replace("/admin/promocode");
            }

            setSuccess(response.data.message);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-8 py-8">
            <form onSubmit={handleSave}>
                <div className="mb-4">
                    <label className="block mb-1"> Promo code</label>
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
                <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                >
                    Create Promo Code
                </button>
            </form>
        </div>
    )
}

export default Promocode;