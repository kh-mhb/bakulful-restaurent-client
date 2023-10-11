import React from 'react';
import aboutUs from '../../assets/AboutUsBanner.jpg'

const AboutUsBanner = () => {
    const backgroundImgUrl = `url(${aboutUs})`;

    const overlayStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), ${backgroundImgUrl}`,
    };

    return (
        <div>
                  <div
      className="h-screen w-screen bg-cover bg-fixed bg-center relative"
      style={overlayStyle}
    >
      <div className="hero min-h-screen ">
  <div className="text-center text-white ">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">About Our Story</h1>
      <p className="py-6 font-mono font-medium  text-lg leading-6  break-all">Bakulful is a wonderful restaurant in a lively part of town. It offers a diverse menu with delicious dishes made from high-quality ingredients. The chefs blend traditional flavors with modern techniques for an unforgettable dining experience. The friendly staff ensures excellent service. Perfect for any occasion..</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </div>
        </div>
    );
};

export default AboutUsBanner;