import React from 'react';
import './PromisePage.css'
import leftImg from '../../assets/PromiseLeft.jpg';

const PromisePage = () => {
  const backgroundImgUrl = `url(${leftImg})`;

  const overlayStyle = {
    backgroundImage: `${backgroundImgUrl}`,
  };

  return (
    <div className='bg-gray-50 bg-fixed'>
         <div className="grid grid-cols-2 w-11/12"
    >
      <div 
       className='h-screen bg-cover w-4/5  mx-auto left-img '
      style={overlayStyle} > 
        
      </div>
      <div className=' p-2' >
        <p className='mt-8 font-medium text-red-500 '>Promise</p>

        <h3 className='text-5xl leading-tight text-slate-700'>Our chef cooks the most delicious food for you</h3>
        <p className='text-xl mt-6 break-all mr-12 font-serif leading-relaxed text-slate-500'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. <br /> 
          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br /> 
          "In this picturesque land, sentences are transformed into savory adventures, and each word carries the aroma of a culinary masterpiece, tantalizing your senses as it dances on your palate."
          
        </p>
      </div>
    </div>
    </div>
  );
};

export default PromisePage;
