
import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Job =({jobs}) => {
    console.log(jobs);


    const {job_title, logo, company_name, remote_or_onsite, job_type,location, salary,id

    } = jobs;
    return (
        <div>
           <div className="card bg-base-100   border-2">
 <div className='flex justify-start' >

<img className='w-[50%] ml-6 h-24 mt-4' src={logo}  />
 </div>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className='text-[#757575]' >  {company_name} </p>


    <div  className='flex gap-4' >

<button  className='btn bg-transparent font-bold text-[#9478FF] border-2 border-[#9478FF]' >   {remote_or_onsite} </button>
<button  className='btn bg-transparent font-bold text-[#9478FF] border-2 border-[#9478FF]' >  {job_type} </button>



    </div>

    <div className='text-[#757575] space-y-2 flex justify-between '>

<p className='flex items-center gap-2' > <IoLocationOutline /> {location}</p>
<p className='flex items-center gap-2'> <AiOutlineDollar />{salary}</p>

</div>

    <div className="card-actions ">
    <NavLink  to={`/see-details/${id}`}><button  className="btn bg-[#9478FF] text-white">  View Details  </button></NavLink>
    </div>
  </div>
</div> 
        </div>
    );
};

Job.propTypes = {
    
    jobs: PropTypes.array.isRequired
};

export default Job;