import { Link } from "react-router-dom";
import Users from "../../component/Users";

const Admin = () => {
  return (
    <section className="flex items-center justify-center w-full h-full flex-col">
      <h1 className="text-6xl font-bold text-gray-800">Admin page</h1>
      <br />
      <Users />
      <br />
      <div className="flex grow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Admin;
