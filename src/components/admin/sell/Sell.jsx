"use client";

import React, { useContext, useState, useEffect } from "react";
import SellContext from "../../../context/SellContext";
import axios from "axios";

const NewSell = () => {
  const { newSellCreate } = useContext(SellContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)


// Fetch branches
useEffect(() => {
  async function fetchData(){
      try{
          const response = await axios.get('http://localhost:3000/api/admin/branch');
          setData(response.data);
      } catch(error){
          setError('Failed to fetch data');
          console.error('Error fetching data:', error);
      }
  }
  fetchData();
}, []);




  const [sell, setSell] = useState({
    branch: "",
    cylinderSize: "",
    cylinderType: "",
    amount: "",
    datedata: "",
    time: "",
    customerName: "",
    phone: "",

  });

  const { 
    branch,
    cylinderType,
    cylinderSize,
    amount,
    time,
    datedata,
    customerName, 
    phone,} = sell;

  const onChange = (e) => {
    setSell({ ...sell, [e.target.name]: e.target.value });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    newSellCreate(sell);
  };
  

  return (
    <section 
    style={{ maxWidth: "700px" }}
    className="main2 mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg">
      <h3 className="mb-3 text-xl md:text-3xl font-semibold text-black">
      <a href="/admin/sell">Back</a> &nbsp;&nbsp;Create Sales || &nbsp;&nbsp;<a href="/admin/branch/new">Create Branch</a> 
      </h3>

      <form onSubmit={submitHandler}>

              
      <label className="" for="inlineFormSelectPref">Shop branch Name</label>
          <select data-mdb-select-init list="browsers3" class="select
              border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              name="branch"
              value={branch}
              onChange={onChange}
          >
            <option>Select branch</option>
              {data?.branch?.map(( pointdata ) => (
              <option>{pointdata?.branchName}</option>
            ))}
          </select>

        <div className="mb-4 py-3">
          <label className="block mb-1"> Cylinder Size </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Cylinder Size"
            name="cylinderSize"
            value={cylinderSize}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Cylinder Type </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Cylinder Type"
            name="cylinderType"
            value={cylinderType}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Amount </label>
          <input
            type="number"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Amount"
            name="amount"
            value={amount}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Date</label>
          <input
            type="date"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Date"
            name="datedata"
            value={datedata}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Time</label>
          <input
            type="time"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Time"
            name="time"
            value={time}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Customer Name </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Customer Name"
            name="customerName"
            value={customerName}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1"> Phone </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={onChange}
            required
          />
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
        >
          Create Sell
        </button>
      </form>
    </section>
  );
};

export default NewSell;