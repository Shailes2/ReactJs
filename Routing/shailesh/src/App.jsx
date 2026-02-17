import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <h1 className="text-primary bg-dark p-2 text-center">Hello shailesh</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="*" element={<Pricing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
