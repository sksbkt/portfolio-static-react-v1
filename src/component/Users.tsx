import { useEffect, useState } from "react";
import UseAxiosPrivate from "../hooks/useAxiosPrivate";
// import useRefreshToken from "../hooks/useRefreshToken";
const Users = () => {
  const [users, setUsers] = useState([]);
  const axiosPrivate = UseAxiosPrivate();
  // const refresh = useRefreshToken();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/api/users", {
          signal: controller.signal,
        });
        const data = response.data;
        console.log(data);
        isMounted && setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <article>
      <h2>Users List</h2>
      {users.length ? (
        <ul>
          {users.map((user: any, index: number) => (
            <li key={index}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
      {/* <button onClick={() => refresh()}>Refresh</button>
      <br /> */}
    </article>
  );
};

export default Users;
