import React from 'react';
import './ChefCards.css';
import { FaUser } from 'react-icons/fa';

const ChefCards = ({chef}) => {
    const {id,name,experience,img,number} = chef;
    console.log(chef);
    return (
        <div>
             <div className="card w-96 bg-base-100 rounded-">
  <figure ><img className='chef-img' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
         <FaUser></FaUser>
        {name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Chef Special </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCards;