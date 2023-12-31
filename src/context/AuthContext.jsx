import { useContext, createContext, useState } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
const [auth,setAuth] = useState({
    token : "",
    isAuth: false,
    userName: "User"
})
  return <AuthContext.Provider value={{auth,setAuth}}>
      {children}
      </AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };