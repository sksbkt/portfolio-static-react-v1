import React, { createContext, ReactNode, useState } from "react";
// import useLocalStorage from "../hooks/useLocalStorage";
interface AuthContextType {
  auth: any;
  setAuth: React.Dispatch<React.SetStateAction<{}>>;
  // persist: boolean;
  // setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
  // persist: false,
  // setPersist: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState({});
  // const [persist, setPersist] = useLocalStorage("persist", false);
  const [persist, setPersist] = useState<boolean>(
    JSON.parse(localStorage.getItem("persist") || "false")
  );
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        // persist,
        // setPersist
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
