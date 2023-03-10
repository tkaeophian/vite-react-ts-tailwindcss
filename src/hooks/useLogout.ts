import { AUTH_TYPE } from "@/context/AuthContext";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: AUTH_TYPE.LOGIN, payload: '' })
    }

    return { logout }
}