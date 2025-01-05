import axios from "../api/axios";
import useAuth from "./useAuth";
function useRefreshToken() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get("/refresh", { withCredentials: true });
    const newAccessToken = response.data.accessToken;
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(newAccessToken);
      return { ...prev, accessToken: newAccessToken };
    });
    return newAccessToken;
  };
  return refresh;
}

export default useRefreshToken;
