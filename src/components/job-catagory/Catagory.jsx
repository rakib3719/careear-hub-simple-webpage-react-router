import CatagorItem from "./CatagorItem";


const Catagory = () => {

    const catagory = [
        {
          icon: "../../assets/icons/accounts.png",
          title: "Account & Finance",
          description: "300 Jobs Available"
        },
        {
          icon: "../../assets/icons/creative.png",
          title: "Creative Design",
          description: "100+ Jobs Available"
        },
        {
          icon: "../../assets/icons/marketing.png",
          title: "Marketing & Sales",
          description: "150 Jobs Available"
        },
        {
          icon: "../../assets/icons/chip.png",
          title: "Engineering Job",
          description: "224 Jobs Available"
        }
      ];
      

      
    return (
        <div  className="w-[80%] max-w-7xl mx-auto mt-16">
       <div  className="catagory-title text-center" >

       <h1 className="text-3xl font-bold" >Job Category List</h1>  
         <p className="text-[#757575]" >Explore thousands of job opportunities with all the information you need. Its your future</p> 

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" >

    {


catagory.map((catagory, idx) => <CatagorItem key={idx} catagory={catagory}></CatagorItem>)
         }

    </div>

       </div>
        </div>
    );
};

export default Catagory;