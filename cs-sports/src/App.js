import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Programmes from "./pages/Programmes";
import Partners from "./pages/Partners";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/ui/theme"
import PhotoGallery from "./pages/PhotoGallery";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/programmes" element={<Programmes/>} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/photogallery" element={<PhotoGallery/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        {/* <Route element={<Error/>} /> */}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
