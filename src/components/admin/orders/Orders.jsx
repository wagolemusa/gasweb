'use client'
import 'flowbite';
import Link from "next/link";
import React, { useContext, useEffect, Suspense } from "react";
import CustromPagination  from '../../layouts/CustromPagination'
import OrderContext from "../../../context/OrderContext";
import { toast } from "react-toastify";
import { formatDate } from '../promo/formatDate';



const Orders = ({ orders }) => {
  const { deleteOrder, error, clearErrors } = useContext(OrderContext)

  useEffect(() => {
    if(error){
      toast.error(error);
      clearErrors();
    }
  },[error])

  const deleteHandler = (id) =>{
    deleteOrder(id);
  }
  return (
 
            <Suspense className="relative overflow-x-auto shadow-md sm:rounded-lg">

              <h1 className="text-3xl my-5 ml-4 font-bold">{orders?.ordersCount} Orders On Process</h1>

              <a href="/admin/orders/shipping" className="btn btn-primary">Shipped Orders</a>&nbsp; &nbsp;
              <a href="/admin/orders/todayorder" className="btn btn-success">today's orders</a>&nbsp; &nbsp;
              <a href="/admin/orders/shipping" className="btn btn-info">All shipped Orders</a>&nbsp; &nbsp;
              <a href="/admin/orders/shipping" className="btn btn-warning">All processing Orders</a>
              <table className="table w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      DATE & TIME
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
                  {orders?.orders?.map((order) =>(
                    
                    <tr className="bg-white">
                    <td className="px-6 py-2">{formatDate(order?.createAt)}</td>
                    <td className="px-6 py-2">UGX {order?.totalAmount}</td>
                    <td className="px-6 py-2">{order?.orderStatus}</td>
                    <td className="px-6 py-2">
                      <div>
                        <Link
                          href={`/admin/orders/${order?._id}`}
                          className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                        >
                          View Order
                        </Link>
                      
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

{/* <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-styled-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div> */}

            </Suspense>
 
  );
};

export default Orders;





