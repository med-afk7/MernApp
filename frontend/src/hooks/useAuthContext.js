import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuth context must be used inside a Authcontext provider')
    }

    return context
}