import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const UseAxiosPrivate = () => {
  // ? Hook to get a new access token
  const refresh = useRefreshToken();

  // ? Hook to get the current auth state
  const { auth } = useAuth();

  useEffect(() => {
    // const controller = new AbortController();
    // ? Interceptor for requests
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        // ? If there's no Authorization header, add one
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        // config.signal = controller.signal;
        return config;
      },
      (error) => {
        // ? Handle request error
        return Promise.reject(error);
      }
    );

    // ? Interceptor for responses
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const prevRequest = error?.config;

        // ? If the response status is 401 and the request hasn't been retried yet
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;

          // ? Get a new access token
          const newAccessToken = await refresh();

          // ? Update the Authorization header
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // ? Retry the request with the new token
          return axiosPrivate(prevRequest);
        }

        // ? Handle response error
        return Promise.reject(error);
      }
    );

    // ? Cleanup interceptors on component unmount
    return () => {
      // controller.abort();
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default UseAxiosPrivate;
