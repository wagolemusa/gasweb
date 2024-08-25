"use client";
import React, { useContext, useState, useEffect} from "react";
import Image from "next/image";
import g from '../../../public/images/g.png'
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Dialog } from '@headlessui/react'

import CartContext from "../../context/CartContext";
import { useSession } from "next-auth/react";
import AuthContext from "../../context/AuthContext";

const Header6 = () => {

        const [mobile, setMobile] = useState(false)
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

    return (

        <>
             <header className="navba6 mx-auto border-b sticky top-0 z-50 shadow-md">
                <nav className="flex items-center justify-between p-4 md:p-6 lg:px-8 font-bold">
                    <div>
                        <Link href="/" className="flex items-center gap-1 text-lg text-red-600">
                        <Link href={"/"} className="text-4xl font-mono">
                            <Image
                            width={40}
                            height={40}
                            className="h-8 w-8 rounded-full "
                            src={g}
                            alt="avatar-img"
                        />
                          </Link>

                        </Link>
                    </div>

                    <div className="flex md:hidden">
                        <button className="-m-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900
                            hover:text-red-600 transition duration-100"
                            onClick={() => setMobile(true)}
                            >
                                 <FiMenu/>
                        </button>
                    </div>

                    <div className="hidden md:flex md:space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                               <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Home</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Full-set</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Gas Cookers</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Accessories</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Contact</Link> 
                            </li>
                        </ul>
                    </div>
                    {/* <a href="/" className="hidden md:block w-full rounded bg-red-600 px-8 py-3 text-md font-medium text-white shadow
                    hover:bg-red focus:outline-none focus:ring active:bg-red-500 sm:w-auto" >Login</a> */}

             <Link
                href="/cart"
                className="inline-block text-center text-gray-700"
                >
                    Cart (<b>{cartItems?.length || 0}</b>)
                </Link>

        {!user ? (
              <Link
                href="/login"
                className="hidden md:block w-full rounded bg-red-600 px-8 py-2 text-md font-medium text-white shadow
                    hover:bg-red focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
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

                </nav>
                <Dialog as='div' className={'md:hidden'} open={mobile} onClose={setMobile}>

                    <div className="fixed inset-0 z-50 bg-gray bg-opacity-8" />
                    <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10 w-screen"
                    >
                    <div className="flex items-center justify-between mb-3">
                    <div>
                        <Link href="/" className="flex items-center gap-1 text-lg text-red-600">
                        <Link href={"/"} className="text-4xl font-mono">
                            <Image
                            width={40}
                            height={40}
                            className="h-8 w-8 rounded-full "
                            src={g}
                            alt="avatar-img"
                        />
                          </Link>

                        </Link>
                    </div>

                    <button className="-m-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900
                            hover:text-red-600 transition duration-100"
                            onClick={() => setMobile(false)}
                            >
                                 <IoCloseOutline/>
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-2 divide-y divide-gray-500/50">
                        <ul className="space-y-10 py-6">
                           
                            <li>
                               <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Home</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Full-set</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Gas Cookers</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Accessories</Link> 
                            </li>
                            <li>
                            <Link href="/" className="text-lg font-medium leading-6 text-slate-900">Contact</Link> 
                            </li>
                        </ul>
                        <div className="py-6">
                        <Link href="/" className="block w-full text-center rounded bg-red-600 px-8 py-3 text-md font-medium text-white shadow
                            hover:bg-red focus:outline-none focus:ring active:bg-red-500 sm:w-auto">Login</Link>
                        </div>
                        </div>
                    </div>
                    </Dialog.Panel>
                </Dialog>
             </header>
        </>
    )
}


export default Header6
