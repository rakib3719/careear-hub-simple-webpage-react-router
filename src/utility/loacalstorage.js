const getStoreedJobData = ()=> {


    const getData = localStorage.getItem('job-id');
    if(getData){


        return JSON.parse(getData)
    }
    return []
}

const setJobData = id => {


    const existData = getStoreedJobData();
    const isExist = existData.find(jobId => jobId === id);
    if(!isExist){

        existData.push(id);
        localStorage.setItem("job-id", JSON.stringify(existData))
    }
  
}

export {getStoreedJobData, setJobData}