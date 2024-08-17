/** @format */
"use client";

import Link from "next/link";
import React, { useContext, useState, useEffect} from "react";
import CartContext from "../../context/CartContext";
import { useSession } from "next-auth/react";
import AuthContext from "../../context/AuthContext";

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import g from '../../../public/images/g.png'
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  console.log(data);

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  const navlinks = [
    {
      labe: "Home",
      link: "/"
    },
    {
      labe: "About",
      link: "/about"
    },
    {
      labe: "Shop",
      link: "/allProducts"
    },
    {
      labe: "Contact",
      link: "/contant"
    }
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6 fixed top-0 left-0 right-0 bg-white p shadow-md">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"} className="text-4xl font-mono">
            <Image
            width={40}
            height={40}
            className="h-8 w-8 rounded-full "
            src={g}
            alt="avatar-img"
          />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-400 hover:text-black text-lg font-bold pl-16"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <h3 className="lg:hidden text-balance  font-bold pt-3">0754188938</h3>
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0  right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
          
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-4 text-3xl cursor-pointer"
            />
      
            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold text-black" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          <Link
              href="/cart"
              className="px-3 py-2 inline-block text-center text-gray-700"
            >
              <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
              <span className="inline ml-1">
                Cart (<b>{cartItems?.length || 0}</b>)
              </span>
            </Link>
          {/* <AiOutlineShoppingCart className="text-3xl" />
          <b>{cartItems?.length || 0}</b> */}
      

          {!user ? (
              <Link
                href="/login"
                className="btn btn-primary px-3 inline-block text-center text-gray-700 shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <i className="text-gray-400  fa fa-user"></i>
                <span className="hidden lg:inline ml-1">Sign in</span>
              </Link>
            ) : (
              <Link href="/me">
                <div className="flex items-center   cursor-pointer">
                  {/* <img
                    className="w-10 h-10 rounded-full"
                    src={
                      
                      user?.avatar ? user?.avatar?.url : "/images/default.png"
                    }
                  /> */}
                  <div className="space-y-1 font-medium">
                    <p>
                      {user?.name}
                      <time className="block text-sm text-gray-500 dark:text-gray-400">
                        
                      </time>
                    </p>
                  </div>
                </div>
              </Link>
            )}
        </section>
      </nav>
      {/* <hr className=" " /> */}
    </main>
  );
}