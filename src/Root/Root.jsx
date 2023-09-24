import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Route = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <div className="container mx-auto text-center">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Route;
