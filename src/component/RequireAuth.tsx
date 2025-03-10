import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

interface RequiredAuthProps {
  allowedRoles: string[];
}
interface DecodedToken {
  roles: [string];
}
const RequireAuth = ({ allowedRoles }: RequiredAuthProps) => {
  const { auth } = useAuth();
  const decoded = auth?.accessToken
    ? jwtDecode<DecodedToken>(auth.accessToken)
    : undefined;
  const roles = decoded?.roles || [];
  console.log(auth);

  const location = useLocation();
  return roles?.find((role: string) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate
      to={"/unauthorized"}
      state={{ from: location }}
      replace
    />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default RequireAuth;
