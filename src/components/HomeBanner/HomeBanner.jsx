import React from 'react';
import bgimg1 from '../../assets/banner3.jpg';


const HomeBanner = () => {
  const backgroundImgUrl = `url(${bgimg1})`;

  const overlayStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), ${backgroundImgUrl}`,
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-fixed bg-center relative"
      style={overlayStyle}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h3 className='text-7xl font-serif ' ><span className='text-orange-300 text-8xl' > Eat</span> What Makes You <span className='text-orange-300 text-8xl' >Happy</span></h3>
        <h2 className='text-2xl font-thin text-center'> <span className='font-bold text-red-700'>AT</span> <br /> <span className='text-6xl font-normal font-serif underline'>Bakul-Ful </span> </h2>
      </div>
    </div>
  );
};

export default HomeBanner;