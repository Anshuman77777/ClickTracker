import { createContext, useContext, useState } from "react";
const AuthContext =createContext();
export function useAuth()
{
    return useContext(AuthContext);
}
//provider
export function AuthProvider({children})
{
    const [user,setUser]=useState(
        JSON.parse(localStorage.getItem("user"))||null
    );
    const [token,setToken]=useState(localStorage.getItem("token")||"");
    const loginLocal = (userData,jwtToken)=>{
        setUser(userData);
        setToken(jwtToken);
        localStorage.setItem("user",JSON.stringify(userData));
        localStorage.setItem("token",jwtToken);
    };
    const logout = ()=>{
        setUser(null);
        setToken("");
        localStorage.clear();
    };
    const value ={
        user,
        token,
        loginLocal,
        logout,
        isLoggedIn:!!token,
        role:user?.role||null,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    
}
