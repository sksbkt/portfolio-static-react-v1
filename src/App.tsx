import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Unauthorized from "./pages/Unauthorized/Unauthorized";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {ROUTES_LIST.map((route, index) => (
          <Route
            path={route.path}
            element={route.element}
            key={index}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

const ROUTES_LIST = [
  { path: "/", element: <Home /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "unauthorized", element: <Unauthorized /> },
];
