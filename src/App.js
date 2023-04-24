//-------------------- Import - Core
import { Routes, Route } from "react-router-dom";



//-------------------- Import - Components
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "Components/Navbar";

//-------------------- Import - View
import Home from "Pages/Home";
import Large from "Pages/Large";


const App = () => {
  return (
    <>
    <CssBaseline />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/large" element={<Large />} />
      </Routes>
    </>
  );
};

export default App;
