import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testemonials";
import Services from "./pages/Services";
import Footer from "./components/common/Footor";
import MyProjects from "./pages/Projects";
import "./index.css";
function App() {
  return (
    <Router>
      <Header />
      <Home />
      <AboutMe />
      <MyProjects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
