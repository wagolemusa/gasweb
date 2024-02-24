'use client'
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { ProductProvider } from "../context/ProductContext";
import { OrderProvider } from "../context/OrderContext"
import { SessionProvider } from "next-auth/react";
import { MainProvider } from "../context/MainContext"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./Provider";

export function GlobalProvider({ children }){
    return(
        <>
    <ToastContainer position="bottom-right" />
    <Provider>
        <AuthProvider>
            <MainProvider>
            <CartProvider>
                <OrderProvider>
                    <ProductProvider>
                        <SessionProvider>{children}</SessionProvider>
                    </ProductProvider>
                </OrderProvider>
            </CartProvider>
            </MainProvider>
        </AuthProvider>
    </Provider>
        </>
    )
}

