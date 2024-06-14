'use client'
import { createContext, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"


const MainContext = createContext();


export const MainProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [updated, setUpdated] = useState(false);
  
    const router = useRouter();

    // creating the branch
    const newBranchCreate = async (branch) => {
        try {
            const { data } = await axios.post(
              `${process.env.ENVIRONMENT_URL}/api/admin/branch`,
              branch
            );
      
            if (data) {
              router.replace("/admin/branch");
            }
          } catch (error) {
            setError(error?.response?.data?.message);
          }
        };

        



    return (
        <MainContext.Provider

        value={{
          
            newBranchCreate,
        }}

        >
            {children}
        </MainContext.Provider>
    )
}

export default MainContext;

