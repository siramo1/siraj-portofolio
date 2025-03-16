import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Portofilio from "./pages/Portofilio";
import Services from "./pages/Services";
import Exprience from "./pages/Exprience";
import Projects from "./pages/Projects";
import './index.css';
import Header from "./components/Header";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Portofilio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Expriences" element={<Exprience />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        </Router>
  );
}

export default App;