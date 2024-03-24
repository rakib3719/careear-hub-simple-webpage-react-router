import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreedJobData } from "../../utility/loacalstorage";
import Applyui from "./Applyui";
import AppliedBanner from "./AppliedBanner";


const Applied = () => {


    const [applyData, setAppliedData] = useState([])
    const [filterData, setFilterData] = useState([])
    const jobs = useLoaderData();

const filterHandleClick = filterType=> {




    if(filterType === "alljobs"){


        setFilterData(applyData)
    }

    if(filterType === "remote"){

const remoteJobs = applyData.filter(applyData => applyData.remote_or_onsite === 'Remote');

setFilterData(remoteJobs)

    }
    if(filterType === "onsite"){

const onsiteJobs = applyData.filter(applyData => applyData.remote_or_onsite === 'Onsite');

setFilterData(onsiteJobs)

    }


}

    useEffect(()=> {


     const LcData =    getStoreedJobData();
  

     if(jobs.length > 0){
const storAppliedData = []
for(const getLcData of LcData){

   

    const mainData = jobs.find(jobs => jobs.id === getLcData);
    
    if(mainData){

        storAppliedData.push(mainData)
    }

}
setAppliedData(storAppliedData)
setFilterData(storAppliedData)
     }
    }, [jobs])


    return (
        <div>

            <AppliedBanner></AppliedBanner>
        <div className=" w-[80%] max-w-7xl mx-auto" >

 <div className="flex justify-end" >


 <div className="dropdown dropdown-hover ">
  <div tabIndex={0} role="button" className="btn m-1">Filter</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li   onClick={()=> filterHandleClick("alljobs")} ><a>Aljobs</a></li>
    <li   
    
    onClick={()=> filterHandleClick("remote")}
    ><a>Remote</a></li>
    <li
    
    
    onClick={()=> filterHandleClick("onsite")}
    ><a>Onsite</a></li>
  </ul>
</div>
 </div>

        {


filterData.map(applyData => <Applyui key={applyData.id} applyData={applyData}></Applyui>)
            }

        </div>
        </div>
    );
};

export default Applied;