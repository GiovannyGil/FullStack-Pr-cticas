import { createContext, useState, useContext } from "react"
import { registerRequest } from "../api/auth";

export const AuthContext = createContext()


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
// metodo para crear un provider de autenticacion
export const AuthProvider = ({ children }) => {
    // estado para el usuario, inicialmente null
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    // metodo para iniciar sesion
    const Signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
            // console.log(error.response)
        }
    }
    return (
        <AuthContext.Provider value={{
            Signup,
            user,
            isAuthenticated,
            errors,
        }}>
        {children}
        </AuthContext.Provider>
    )
}