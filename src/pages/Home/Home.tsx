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
      {/* <Link
        to="/admin"
        className="z-40"
      >
        ADMIN
      </Link> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
