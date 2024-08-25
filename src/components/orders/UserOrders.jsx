'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserOrdersData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/api/orders/userOrder');
                console.log('API Response:', response.data);
                setData(response.data);
            } catch (error) {
                setError('Failed to fetch data');
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data || !data.order || data.order.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.order.map((order) => (
                <article key={order._id} className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
                    <header className="lg:flex justify-between mb-4">
                        <div className="mb-4 lg:mb-0">
                            <p className="font-semibold">
                                <span>Order ID: {order._id} </span>
                                {order.orderStatus === "Processing" ? (
                                    <span className="text-red-500">
                                        {order.orderStatus.toUpperCase()}
                                    </span>
                                ) : (
                                    <span className="text-green-500">
                                        {order.orderStatus.toUpperCase()}
                                    </span>
                                )}
                            </p>
                            <p className="text-gray-500">{order.createAt?.substring(0, 10)} </p>
                        </div>
                    </header>
                    <div className="grid md:grid-cols-3 gap-2">
                        <div>
                            <p className="text-gray-400 mb-1">Payment</p>
                            <ul className="text-gray-600">
                                <li>Total paid: UGX {order.amount} </li>
                            </ul>
                        </div>
                    </div>
        
                    <hr className="my-4" />
        
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {order.orderItems?.map((item) => (
                            <figure className="flex flex-row mb-4" key={item.product}>
                                <div>
                                    <div className="block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3">
                                        <img src={item?.image} height="60" width="60" alt={item.name} />
                                    </div>
                                </div>
                                <figcaption className="ml-3">
                                    <p>{item.name.substring(0, 35)}</p>
                                    <p className="mt-1 font-semibold">{item.quantity}x = {item.price * item.quantity}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
};

export default UserOrdersData;
