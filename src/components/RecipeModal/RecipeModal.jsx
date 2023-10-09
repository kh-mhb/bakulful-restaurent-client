import React from 'react';

const RecipeModal = ({items}) => {
    return (
        <div>
             <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-xl font-sans">{items.food_name}</h3>
    <p className="py-4 text-xl ">{items.recipe}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
      </dialog>
        </div>
    );
};

export default RecipeModal;