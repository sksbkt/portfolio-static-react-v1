import Banner from "../../component/Banner";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";
import Projects from "../../component/Projects";
import Skills from "../../component/Skills";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
