
import PropTypes from 'prop-types';
import icon from "../../assets/icons/accounts.png"

const CatagorItem = ({catagory}) => {

    return (
        <div className='space-y-2 rounded mt-12 py-8 bg-[#F9F9FF]' >
            <img className='ml-12 ' src={icon} alt="" />
       <h1 className='text-xl font-bold' >{catagory.title}</h1>
       <p>{catagory.description}</p>
        </div>
    );
};

CatagorItem.propTypes = {
    catagory: PropTypes.array.isRequired  
};

export default CatagorItem;