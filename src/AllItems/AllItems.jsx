import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AllItem from '../components/AllItem/AllItem';

const AllItems = () => {
    const {id} = useParams();
    console.log(id);
     const chefAllItems = useLoaderData();
     console.log(chefAllItems);
    return (
        <div>
          <div className='grid lg:grid-cols-4'>
            {
                 
                 chefAllItems.map(items => <AllItem
                  key={items._id}
                  items={items}
                 ></AllItem> )
             
            }
          </div>
        </div>
    );
};

export default AllItems;