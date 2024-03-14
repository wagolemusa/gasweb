'use client'
import { createContext, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"


const PointContext = createContext();


export const PointProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [updated, setUpdated] = useState(false);
  
    const router = useRouter();


        // creating the branch
        const newPointCreate = async (point) => {
          try {
              const { data } = await axios.post(
                `${process.env.ENVIRONMENT_URL}/api/admin/points`,
                    point
              );
        
              if (data) {
                router.replace("/admin/points");
              }
            } catch (error) {
              setError(error?.response?.data?.message);
            }
          };
  
  



    return (
        <PointContext.Provider

        value={{
          
            newPointCreate
        }}

        >
            {children}
        </PointContext.Provider>
    )
}

export default PointContext;

