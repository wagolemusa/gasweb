"use client";

import React, { useContext, useState } from "react";
import PointContext from "../../context/PointContext";

const Point = () => {
  const { newPointCreate } = useContext(PointContext);

  const [point, setPoint] = useState({
    customerName: "",
    phone: "",
    cylinderSize: "",
    cylinderType: "",
    

  });

  const { 
    customerName,
    phone,
    cylinderSize,
    cylinderType} = point;

  const onChange = (e) => {
    setPoint({ ...point, [e.target.name]: e.target.value });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    newPointCreate(point);
  };
  

  return (
    <section className="container max-w-3xl p-6 mx-auto">
      <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black mb-8">
        Create New Customer
      </h1>

      <form onSubmit={submitHandler}>
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
            placeholder="Phone Number"
            name="phone"
            value={phone}
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
          <label className="block mb-1"> Cylinder Size </label>
          <input
            type="number"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Cylinder Size"
            name="cylinderSize"
            value={cylinderSize}
            onChange={onChange}
            required
          />
        </div>


        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
        >
          Create Points
        </button>
      </form>
    </section>
  );
};

export default Point;