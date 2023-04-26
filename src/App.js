//-------------------- Import - Core
import { Routes, Route } from "react-router-dom";



//-------------------- Import - Components
import { CssBaseline, Toolbar, Box } from "@mui/material";
import Navbar from "Components/Navbar";

//-------------------- Import - View
import Home from "Pages/Home";
import Large from "Pages/Large";


const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box component="main">
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/large" element={<Large />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
