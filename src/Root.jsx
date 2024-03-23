import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


const Root = () => {
    return (
      <div className="main" >

<div className="bg-[#F9F9FF]" >

<div className="w-[80%] max-w-7xl mx-auto" >
       
       
       <Header></Header>


        </div>


       </div>





<Outlet></Outlet>



<div className=" bg-[#1A1919]">

<Footer></Footer>

</div>


      </div>
    );
};

export default Root;