import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main className="mt-[67px]">
      <Outlet />
      </main>  
      
    
      <Footer />
    </div>
  )
};

export default Layout