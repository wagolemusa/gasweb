'use client'
import { createContext, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"


const CompanyContext = createContext();


export const CompanyProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [updated, setUpdated] = useState(false);
  
    const router = useRouter();


        // creating the branch
        const newCompanyCreate = async (company) => {
          try {
              const { data } = await axios.post(
                `${process.env.ENVIRONMENT_URL}/api/admin/company`,
                company
              );
        
              if (data) {
                router.replace("/admin/company");
              }
            } catch (error) {
              setError(error?.response?.data?.message);
            }
          };
  
  



    return (
        <CompanyContext.Provider

        value={{
          
            newCompanyCreate
        }}

        >
            {children}
        </CompanyContext.Provider>
    )
}

export default CompanyContext;

