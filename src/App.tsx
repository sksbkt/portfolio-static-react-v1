import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <main className="app">
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
    </main>
  );
}

export default App;
