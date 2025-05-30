import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const logout = () => {
        //removove the user

        localStorage.removeItem('user')
        //dispatch logout action

        dispatch({type:'LOGOUT'})


    }

    return {logout}
}