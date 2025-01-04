import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface RequiredAuthProps {
  allowedRoles: string[];
}
const RequireAuth = ({ allowedRoles }: RequiredAuthProps) => {
  const { auth } = useAuth();
  console.log(auth);

  const location = useLocation();
  return auth?.roles?.find((role: string) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default RequireAuth;
