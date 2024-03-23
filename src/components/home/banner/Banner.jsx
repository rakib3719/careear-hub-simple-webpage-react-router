
import userImg from '../../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="w-[80%] max-w-7xl mx-auto" >
     



     <div className="hero min-h-screen bg-[##F9F9FF]">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='w-[100%]' >

   <img  src={userImg} />
   </div>
    <div>
      <h1 className="text-5xl font-bold">One Step Closer To Your <span className='text-[#9478FF]' >Dream Job</span></h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <a  className="btn bg-[#9478FF] text-white">Get Started</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;