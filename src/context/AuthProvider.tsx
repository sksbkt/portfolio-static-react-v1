import React, { createContext, ReactNode, useState } from "react";
interface AuthContextType {
  auth: {};
  setAuth: React.Dispatch<React.SetStateAction<{}>>;
}
const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
