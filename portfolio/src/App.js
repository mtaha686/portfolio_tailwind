import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testemonials";
import Footer from "./components/common/Footor";
function App() {
  return (
    <Router>
      <Header />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
