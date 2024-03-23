import Catagory from "../job-catagory/Catagory";
import Jobs from "../job/Jobs";
import Banner from "./banner/Banner";


const Home = () => {
    return (
        <div  >
         
<div className="banner bg-[#F9F9FF]">

<Banner></Banner>

</div>

<Catagory></Catagory>
<Jobs></Jobs>

        </div>
    );
};

export default Home;