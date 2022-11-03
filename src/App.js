import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Html from "./pages/Html"
import Css from "./pages/Css"
import Logo from "./pages/Logo"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="html" element={<Html/>}/>
          <Route path="css" element={<Css/>}/>
          <Route path="logo" element={<Logo/>}/>
        </Route>
        <Route path="about" element={<About/>}/>

        <Route path="services" element={<Services/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
