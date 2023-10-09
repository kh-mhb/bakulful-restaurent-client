import React from 'react';
import { FaBeer } from 'react-icons/fa';
import service from '../../assets/LightGallery/service.jpg';
const Services = () => {
    const backgroundImgUrl = `url(${service})`;

    const overlayStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), ${backgroundImgUrl}`,
    };
    return (
        <div className='bg-zinc-50'>
            <div className='text-center my-8 p-5' >
               <h3 className='font-bold font-serif text-slate-600 text-6xl '> Catering Services</h3>
               <p className='font-thin text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className='grid grid-cols-3 px-10 w-4/5 mx-auto gap-5 '>
                <div className='text-center'>
                    <p className='w-1 mx-auto' ><FaBeer/></p>
                    <h1 className='text-3xl font-medium mb-4' >Birthday Party</h1>
                    <p className='text-slate-500 leading-relaxed pb-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus molestias, possimus eum quisquam neque. Possimus voluptatem excepturi magnam dolore voluptatum sint, modi illo accusantium ea sapiente perspiciatis soluta dolores fuga itaque tenetur error. Dolores dolore deleniti error modi temporibus!</p>
                </div>
                <div className='text-center'>
                    <p className='w-1 mx-auto' ><FaBeer/></p>
                    <h1 className='text-3xl font-medium mb-4' >Birthday Party</h1>
                    <p className='text-slate-500 leading-relaxed pb-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus molestias, possimus eum quisquam neque. Possimus voluptatem excepturi magnam dolore voluptatum sint, modi illo accusantium ea sapiente perspiciatis soluta dolores fuga itaque tenetur error. Dolores dolore deleniti error modi temporibus!</p>
                </div>
                <div className='text-center'>
                    <p className='w-1 mx-auto' ><FaBeer/></p>
                    <h1 className='text-3xl font-medium mb-4' >Birthday Party</h1>
                    <p className='text-slate-500 leading-relaxed pb-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus molestias, possimus eum quisquam neque. Possimus voluptatem excepturi magnam dolore voluptatum sint, modi illo accusantium ea sapiente perspiciatis soluta dolores fuga itaque tenetur error. Dolores dolore deleniti error modi temporibus!</p>
                </div>
            </div>
        </div>
    );
};

export default Services;