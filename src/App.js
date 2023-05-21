//-------------------- Import - Core
import { Routes, Route } from "react-router-dom";



//-------------------- Import - Components
import { CssBaseline, Toolbar, Box, Fab } from "@mui/material";
import Navbar from "Components/Navbar";

//-------------------- Import - View
import Home from "Pages/Home";
import Animation from "Pages/Animation";
import Large from "Pages/Large";
import Mediation from "Pages/Mediation";
import Pedagogie from "Pages/Pedagogie";
import FacebookIcon from '@mui/icons-material/Facebook';



const App = () => {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box component="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acceuil" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/mediation" element={<Mediation />} />
          <Route path="/pedagogie" element={<Pedagogie />} />
          <Route path="/large" element={<Large />} />
        </Routes>
        <Fab color="primary" id="fab-container">
          <FacebookIcon />
        </Fab>
      </Box>
    </>
  );
};

export default App;

