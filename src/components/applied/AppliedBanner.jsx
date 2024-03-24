import img1  from '../../assets/images/bg1.png'
import img2  from '../../assets/images/bg2.png'

const AppliedBanner = () => {
    return (
        <div  className="bg-[#F9F9FF] justify-between">
            

<div  className="flex justify-between">



<div  className="bg-1 w-1/3"  >

<img src={img1} alt="" />

</div>

<h1   className="text-2xl w-1/3 text-center items-center   font-bold  mt-32" >Applied Job</h1>

<div  className="w-1/3"> 


</div>
</div>

<div  className="bg-2 absolute -top-8 -right-24" >


<img src={img2} alt="" />

</div>

        </div>
    );
};

export default AppliedBanner;