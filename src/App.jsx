import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Donate,
  Gallery,
  Join,
  Vision,
  NotFound,
} from "./pages/index";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Donate />
      <Gallery />
      <Join />
      <Vision />
      <NotFound />
    </BrowserRouter>
  );
}

export default App;
