import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main>
      <div className="layoutWrapper">
      <Header />
      
      {/* outlet used by parent route elements to render their child route elements ie in App.js the layout route encloses all the other routes */}
      <Outlet />
      <Footer />
      </div>

    </main>
  );
}