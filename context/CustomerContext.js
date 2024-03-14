'use client'
import { createContext, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"


const CustomerContext = createContext();


export const CustomerProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [updated, setUpdated] = useState(false);
  
    const router = useRouter();

    // creating the branch
    const newCustomerCreate = async (customer) => {
        try {
            const { data } = await axios.post(
              `${process.env.ENVIRONMENT_URL}/api/admin/customer`,
              customer
            );
      
            if (data) {
              router.replace("/admin/branch");
            }
          } catch (error) {
            setError(error?.response?.data?.message);
          }
        };




    return (
        <CustomerContext.Provider

        value={{
          
            newCustomerCreate,
            // newCompanyCreate
        }}

        >
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContext;

