import React from 'react';
import { FaChartBar, FaHeart } from 'react-icons/fa';
import RecipeModal from '../RecipeModal/RecipeModal';

const AllItem = ({items}) => {
     console.log(items);
     const {food_img,food_name,like,ratings,recipe,_id} = items;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-lg">
  <figure className="px-10 pt-10">
    <img src={food_img} alt={food_name} className="rounded-xl h-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-mono text-lg">{food_name}</h2>
    <div className='grid grid-cols-2 gap-5' >
    <p className='flex items-center gap-2'> <FaHeart></FaHeart> {like}</p>
    <p className='flex items-center gap-2'> <FaChartBar></FaChartBar> {ratings}</p>
    </div>
    <div className="card-actions">
      <button   className="btn btn-primary"
       onClick={()=>document.getElementById('my_modal_1').showModal()}
      >View Recipe</button>
      <div>
     <RecipeModal items={items} ></RecipeModal>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllItem;