import axios from "../api/axios";
import useAuth from "./useAuth";
function useRefreshToken() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get("/api/auth/refresh", {
      withCredentials: true,
    });
    const newAccessToken = response.data.accessToken;
    setAuth((prev: any) => {
      return {
        ...prev,
        // roles: response.data.roles,
        accessToken: newAccessToken,
      };
    });
    return newAccessToken;
  };
  return refresh;
}

export default useRefreshToken;
