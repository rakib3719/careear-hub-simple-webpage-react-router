import { useEffect, useState } from "react";
import Job from "./Job";


const Jobs = () => {


    const [jobs, setJobs] = useState([]);
    const [show, setShow] = useState(4);

   

    useEffect(()=>{

        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data) )

    }, [])
    const handleSHowAllJob = ()=> {

        setShow(jobs.length)
    }

console.log(jobs);
    return (
        <div  className="w-[80%] mt-16 max-w-7xl mx-auto" >
          
<div  className="text-center" >


<h1 className="text-3xl font-bold" >Featured Jobs</h1>  
         <p className="text-[#757575]" >Explore thousands of job opportunities with all the information you need. Its your future</p> 

</div>
<div  className="grid md:grid-cols-2 gap-8 mt-16" >

{

jobs.slice(0, show).map(jobs => <Job key={jobs.id}  jobs={jobs}></Job>)

}

</div>



<div  className={show === jobs.length && "hidden"} >

<div className= {"flex justify-center mt-4 mb-4" }  >

<button   onClick={handleSHowAllJob} className='btn bg-[#9478FF] text-white ' >  Show All Job </button>
</div>
</div>
        </div>
    );
};

export default Jobs;