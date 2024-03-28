'use client'
import { createContext, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"


const GasContext = createContext();


export const GasProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [updated, setUpdated] = useState(false);
  
    const router = useRouter();

    // creating the sell
    const newGasCreate = async (gas) => {
        try {
            const { data } = await axios.post(
              `${process.env.ENVIRONMENT_URL}/api/admin/gas`,
              gas
            );
      
            if (data) {
              router.replace("/admin/gas");
            }
          } catch (error) {
            setError(error?.response?.data?.message);
          }
        };




    return (
        <GasContext.Provider

        value={{
          
            newGasCreate,
        }}

        >
            {children}
        </GasContext.Provider>
    )
}

export default GasContext;

