import { createContext, useContext } from "react";

// Define the shape of the context value
export interface AdminContextType {
    aToken: string | "";
    setaToken: React.Dispatch<React.SetStateAction<string | "">>
    backendUri: string | undefined;
}

export const AdminContext = createContext<AdminContextType | undefined>(undefined);



export const useAdminContext = () => {

    const admin = useContext(AdminContext)

    if (admin === undefined) {
        throw new Error("Admin Context must be used with a Root")
    }

    return admin

};