import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="w-[100dvw] flex justify-center items-center h-[100dvh] overflow-hidden flex-col">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        replace
      >
        Go to Home
      </Link>
    </section>
  );
};

export default NotFound;
