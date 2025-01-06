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
      console.log({ PREV: prev.accessToken, NEW: newAccessToken });
      return { ...prev, accessToken: newAccessToken };
    });
    return newAccessToken;
  };
  return refresh;
}

export default useRefreshToken;
