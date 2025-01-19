import { Link, useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section className="w-[100dvw] flex justify-center items-center h-[100dvh] overflow-hidden flex-col">
      <h1 className="text-6xl font-bold text-gray-800">401</h1>
      <p className="text-xl text-gray-600 mt-4">
        You do not have permission to view this page.
      </p>
      <div
        onClick={goBack}
        className="mt-6 px-4 h-10 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back
      </div>
    </section>
  );
};

export default Unauthorized;
