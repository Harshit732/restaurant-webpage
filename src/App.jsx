import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./pages/Menu";
import Description from "./pages/Description";
import Footer from "./components/Footer";
import { CartProvider } from "./CartProvider";

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/menu/:name" element={<Menu />} />
            <Route path='/description/' element={<Description/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </CartProvider>
     
    </>
  );
}

export default App;