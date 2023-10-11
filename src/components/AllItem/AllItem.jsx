import React, { useState, useEffect } from 'react';
import { FaChartBar, FaHeart } from 'react-icons/fa';

const AllItem = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  // Add event listener to close modal when Esc key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-lg">
        <figure className="px-10 pt-10">
          <img src={items.food_img} alt={items.food_name} className="rounded-xl h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-mono text-lg">{items.food_name}</h2>
          <div className='grid grid-cols-2 gap-5'>
            <p className='flex items-center gap-2'> <FaHeart></FaHeart> {items.like}</p>
            <p className='flex items-center gap-2'> <FaChartBar></FaChartBar> {items.ratings}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => openModal(items)}>View Recipe</button>
          </div>
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <dialog className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-xl font-sans">{selectedItem.food_name}</h3>
            <p className="py-4 text-xl ">{selectedItem.recipe}</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AllItem;
