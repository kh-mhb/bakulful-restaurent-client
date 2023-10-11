import React, { useEffect, useState } from 'react';
import ChefCards from '../components/ChefCards/ChefCards';

const ChefsSection = () => {
    const [chefs, setChefs] = useState([]);
    const [size, setSize] = useState(0);

    useEffect(() => {
        fetch(`https://bakulful-restaurant-server-9ir4nzp66-kh-mhb.vercel.app/chefs?size=${size}`)
        .then(res => res.json())
        .then(data => setChefs(data));
    }, [size])

    return (
        <div>
            <div className='text-center text-3xl'>
                <h3 className='font-bold font-serif text-slate-600 text-6xl my-9 '> Our Special <span className='text-red-600'>Chefs</span> </h3>
            </div>
            <div className='grid grid-cols-4 gap-8 w-10/12 mx-auto '>
                {
                    chefs.map(chef => <ChefCards
                        key={chef.id}
                        chef={chef}
                    ></ChefCards>)
                }
            </div>
            <div className='text-center mt-4'>
                <button
                    onClick={() => setSize(10)}
                    className={`btn btn-active btn-neutral px-7 py-4 ${size === 10 ? "hidden" : "block"}`}
                    style={{
                        margin: '0 auto', // Center horizontally
                        // display: 'block'   // Center vertically
                    }}
                >
                    Show all
                </button>
            </div>
        </div>
    );
};

export default ChefsSection;
