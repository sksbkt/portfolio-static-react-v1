import { useEffect, useState } from "react";
import UseAxiosPrivate from "../hooks/useAxiosPrivate";
import { Table } from "react-bootstrap";
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
        const userNames = data.map((user: any) => user.username);
        // console.log(data);
        // isMounted && setUsers(data);
        isMounted && setUsers(userNames);
      } catch (error: any) {
        if (error.name === "CanceledError") {
          console.log("Request canceled:", error.message);
        } else {
          console.error(error);
        }
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
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No users to display</td>
            </tr>
          )}
        </tbody>
      </Table>
      {/* <button onClick={() => refresh()}>Refresh</button>
      <br /> */}
    </article>
  );
};

export default Users;
