import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="app">
      <Outlet />
    </main>
  );
}

export default Layout;
