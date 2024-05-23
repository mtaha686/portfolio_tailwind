import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testemonials";
import Footer from "./components/common/Footor";
function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
