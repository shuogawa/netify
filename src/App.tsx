import * as React from "react"
import {Routes, Route} from "react-router-dom";
import {ChakraProvider, theme,} from "@chakra-ui/react"
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import PageD from "./pages/PageD";
import PageE from "./pages/PageE";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/a" element={<PageA/>}/>
      <Route path="/b" element={<PageB/>}/>
      <Route path="/c" element={<PageC/>}/>
      <Route path="/d" element={<PageD/>}/>
      <Route path="/e" element={<PageE/>}/>
    </Routes>
  </ChakraProvider>
)
