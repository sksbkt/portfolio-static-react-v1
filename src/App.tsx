import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
