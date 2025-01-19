import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import * as Sentry from "@sentry/react";
import NotFound from "./pages/NotFound/NotFound";
import RequireAuth from "./component/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/Admin/Admin";
import PersistLogin from "./component/PersistLogin";
function App() {
  // return (
  //   <button
  //     onClick={() => {
  //       throw new Error("This is your first error!");
  //     }}
  //   >
  //     Break the world
  //   </button>
  // );
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {UNPROTECTED_ROUTES_LIST.map((route, index) => (
          <Route
            path={route.path}
            element={route.element}
            key={index}
          />
        ))}
        <Route element={<PersistLogin />}>
          <Route
            element={
              <RequireAuth allowedRoles={["admin", "manager", "user"]} />
            }
          >
            {PROTECTED_ROUTES_LIST.map((route, index) => (
              <Route
                path={route.path}
                element={route.element}
                key={index}
              />
            ))}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Sentry.withProfiler(App);

// Define the list of routes for the application
const UNPROTECTED_ROUTES_LIST = [
  { path: "/", element: <Home /> }, // Home page
  { path: "login", element: <Login /> }, // Login page
  { path: "register", element: <Register /> }, // Register page
  { path: "unauthorized", element: <Unauthorized /> }, // Unauthorized access page
  {
    path: "*",
    element: <NotFound />, // 404 Not Found page
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
];
const PROTECTED_ROUTES_LIST = [
  {
    path: "admin",
    element: <Admin />,
  },
];
