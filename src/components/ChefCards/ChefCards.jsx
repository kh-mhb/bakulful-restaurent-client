import React from 'react';
import './ChefCards.css';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCards = ({chef}) => {
    const {id,name,experience,img,number} = chef;
    // console.log(chef);
    return (
        <div>
             <div className="card w-96 bg-base-100 rounded-">
  <figure ><img className='chef-img' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
         <FaUser></FaUser>
        {name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-start">
      <Link to={`/chefItem/${id}`} > <button className="btn btn-primary m-4">Chef Special </button> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCards;