'use client'
import 'flowbite';
import Link from "next/link";
import React, { useContext, useEffect, Suspense } from "react";
import CustromPagination from '../../layouts/CustromPagination'
import OrderContext from "../../../context/OrderContext";
import { toast } from "react-toastify";

const OrdersAll = ({ orders }) => {
    const { deleteOrder, error, clearErrors } = useContext(OrderContext)

    useEffect(() => {
        if (error) {
            toast.error(error);
            clearErrors();
        }
    }, [error])

    const deleteHandler = (id) => {
        deleteOrder(id);
    }
    return (

        <Suspense className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h1 className="text-3xl my-5 ml-4 font-bold">{orders?.ordersCount} Orders</h1>
            <table className="w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount Paid
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.orders?.map((order) => (

                        <tr className="bg-white">
                            <td className="px-6 py-2">{order?._id}</td>
                            <td className="px-6 py-2">${order?.totalAmount}</td>
                            <td className="px-6 py-2">{order?.orderStatus}</td>
                            <td className="px-6 py-2">
                                <div>
                                    <Link
                                        href={`/admin/orders/${order?._id}`}
                                        className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                    >
                                        {/* <i className="fa fa-pencil" aria-hidden="true"></i> */}
                                        Edit
                                    </Link>
                                    <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                                        onClick={() => deleteHandler(order?._id)}
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
            <div className="md-6">
                <CustromPagination
                    resPerPage={orders?.resPerPage}
                    productsCount={orders?.ordersCount}
                />
            </div>
        </Suspense>

    );
};

export default OrdersAll;





