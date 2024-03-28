'use client'
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { ProductProvider } from "../context/ProductContext";
import { OrderProvider } from "../context/OrderContext"
import { SessionProvider } from "next-auth/react";
import { MainProvider } from "../context/MainContext"
import { CompanyProvider } from "../context/CompanyContext";
import {CustomerProvider} from "../context/CustomerContext";
import { PointProvider } from "../context/PointContext";
import { SellProvider } from "../context/SellContext";
import { GasProvider} from "../context/GasContext"


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./Provider";
import { InvetoryProvider } from "../context/InvetoryContext";

export function GlobalProvider({ children }) {
    return (
        <>
            <ToastContainer position="bottom-right" />
            <Provider>
                <AuthProvider>
                    <MainProvider>
                        <CompanyProvider>
                            <CartProvider>
                                <CustomerProvider>
                                <OrderProvider>
                                    <ProductProvider>
                                        <PointProvider>
                                            <SellProvider>
                                                <InvetoryProvider>
                                                    <GasProvider>
                                            <SessionProvider>{children}</SessionProvider>
                                                </GasProvider>
                                                </InvetoryProvider>
                                            </SellProvider>
                                        </PointProvider>
                                    </ProductProvider>
                                </OrderProvider>
                                </CustomerProvider>
                            </CartProvider>
                        </CompanyProvider>
                    </MainProvider>
                </AuthProvider>
            </Provider>
        </>
    )
}

