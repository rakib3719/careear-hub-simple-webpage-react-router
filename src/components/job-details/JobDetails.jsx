

import { NavLink, useLoaderData, useParams } from "react-router-dom";
import JobBanner from "./JobBanner";
import { AiOutlineDollar } from "react-icons/ai"
import { MdOutlineSubtitles } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { setJobData } from "../../utility/loacalstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const JobDetails = () => {

const jobdata = useLoaderData();
const {id} = useParams();


const mainData = jobdata.find(datas => datas.id === parseInt(id));
console.log(mainData);

const {salary,  job_title, contact_information } = mainData;

const applayNowHandle = ()=> {

setJobData(parseInt(id))

}


const toasti = ()=> {


    toast('Applied done')
}
    return (
        <div>
            <JobBanner></JobBanner>
        


        <div className="job-details grid grid-cols-3 w-[80%] max-w-7xl mx-auto mt-16">

            <div  className="description col-span-2 space-y-2" >

<p  className="text-[#757575]" ><span  className="font-bold text-black" >Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>

<br />
<p  className="text-[#757575] mt-8" ><span  className=" text-black font-bold" >Job Responsibility:</span>  Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members..</p>


<h1 className="font-bold" >Educational Requirements:</h1>

<p  className="text-[#757575]">Bachelor degree to complete any reputational university.</p>

<h1 className="font-bold" >Experiences:</h1>
<p  className="text-[#757575]">2-3 Years in this field.</p>


            </div>
            <div className="job-details-card col-span-1 bg-[#dadae2] rounded p-8" >



<h1 className="font-bold text-xl" > Job Details </h1><br />
<h1>  id: {id} </h1>
<hr /><br />
<p className="flex gap-2 items-center text-[#757575]" >  <AiOutlineDollar /> <span className="font-bold" >Salary : {salary}</span> </p>

<p className="flex gap-2 items-center mt-4 text-[#757575]" >  <MdOutlineSubtitles /> <span className="font-bold" >Job Title : {job_title}</span> </p>


<h1 className="font-bold text-xl" > Contact Information </h1><br />

<hr />
<p className="flex gap-2 items-center mt-4 text-[#757575]" >  <FaPhoneAlt />
<span className="font-bold" >Phone : {contact_information.phone}</span> </p>

<p className="flex gap-2 items-center mt-4 text-[#757575]" >  <MdOutlineEmail />
 <span className="font-bold" >Email : {contact_information.email}</span> </p>

<p className="flex gap-2 items-center mt-4 text-[#757575]" >  <MdOutlineLocationOn className="text-[40px]" /> <span className="font-bold" >Address: {contact_information.address}</span> </p>

<NavLink onClick={toasti} ><button onClick={applayNowHandle}  className="btn bg-[#9478FF] text-white mt-5 w-full">  Apply now  </button></NavLink>

            </div>


         
            <ToastContainer />
        </div>
        </div>
    );
};

export default JobDetails;