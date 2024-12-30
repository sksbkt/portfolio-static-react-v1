import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>401 - Unauthorized</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Unauthorized;
