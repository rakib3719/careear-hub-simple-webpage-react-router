import { NavLink } from "react-router-dom";


const Header = () => {


    const nav = <>

    <li>   <NavLink to='/' > Home </NavLink> </li>  
    <li >   <NavLink to='/statis' > Statistics </NavLink> </li>  
    <li>   <NavLink to='/blog' > Blog </NavLink> </li>  
    <li>   <NavLink to='/applied' > applied </NavLink> </li>  
     

    
    
    </>
    return (
        <div className=" bg-[#F9F9FF] " >
            <div className="navbar bg-[#F9F9FF]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu text-[#474747] text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

{nav}


      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-2xl">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg text-[#474747]">

{nav}
    </ul>
  </div>
  <div className="navbar-end">
    <a  className="btn bg-[#9478FF] text-white">Start Applaying</a>
  </div>
</div>
        </div>
    );
};

export default Header;