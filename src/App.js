import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Site from "./layouts/Site";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
