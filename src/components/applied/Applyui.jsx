
import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
const Applyui = ({applyData}) => {

    const {job_title, logo, company_name, remote_or_onsite, job_type,location, salary} = applyData
    return (
        <div>
          

          <div  className='applyCardMain flex justify-between p-4 border-2 mt-4 items-center rounded-xl'>

<div  className='logo'>

<img src={logo} alt="" />
</div>

<div  className='description space-y-2'>

<h2 className="card-title">{job_title}</h2>
    <p className='text-[#757575]' >  {company_name} </p>


    <div  className='flex gap-4 items-center' >

<button  className='btn bg-transparent font-bold text-[#9478FF] border-2 border-[#9478FF]' >   {remote_or_onsite} </button>
<button  className='btn bg-transparent font-bold text-[#9478FF] border-2 border-[#9478FF]' >  {job_type} </button>



    </div>

    <div className='text-[#757575]  gap-4 flex justify-between '>

<p className='flex items-center gap-2' > <IoLocationOutline /> {location}</p>
<p className='flex items-center gap-2'> <AiOutlineDollar />{salary}</p>

</div>
</div>

<div  className='button'>
<button className='btn bg-[#9478FF] text-white' > View Details</button>

</div>

          </div>
        </div>
    );
};

Applyui.propTypes = {
    
    applyData: PropTypes.array.isRequired
};

export default Applyui;