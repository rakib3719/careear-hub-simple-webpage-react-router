import { Link, useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
    const navigation = useNavigate()

const backHandle = ()=> {

    navigation(-1)
}
    const error = useRouteError();
    console.log(error);
    return (
        <div  className="flex justify-center items-center h-lvh">
   
   



   <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Error</h2>
    <h2 className="card-title">{error.status
}! </h2>


    <p> Page {error.statusText} </p>
    <div className="card-actions justify-end">
  <Link to='/' >     <button className="btn btn-primary">Go to Home</button> </Link>
    <button onClick={backHandle} className="btn btn-ghost">Go Back</button> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Error;