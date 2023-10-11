import React from 'react';
import {  FaBirthdayCake, FaBusinessTime, FaCcDinersClub } from 'react-icons/fa';
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
               <p className='font-thin text-lg' >"Catering Excellence: Elevating Your Dining Experience Beyond the Restaurant"</p>
            </div>
            <div className='grid grid-cols-3 px-10 w-4/5 mx-auto gap-5 '>
                <div className='text-center'>
                    <p className='w-1 mx-auto' ><FaBirthdayCake className='text-3xl'/></p>
                    <h1 className='text-3xl font-medium mb-4' >Birthday Party</h1>
                    <p className='text-slate-500 leading-relaxed pb-8 text-lg'>Elevate your birthday celebrations with Bakulful Restaurant catering service. We understand that birthdays are a time for joy and fun, and our catering menu is designed to add that extra touch of delight to your special day. We offer a wide range of flavorful dishes, from delectable appetizers to mouthwatering desserts, ensuring there's something to please every palate. What sets us apart is our commitment to customization - we work closely with you to tailor the menu to your preferences, whether it's a themed kids' party or an elegant gathering for adults. Our professional catering team takes care of everything, from setup to service, allowing you to relax and enjoy the party with your guests.

</p>
                </div>
                <div className='text-center'>
                    <p className='w-1 mx-auto' ><FaCcDinersClub className='text-3xl' /></p>
                    <h1 className='text-3xl font-medium mb-4' >Wedding Party</h1>
                    <p className='text-slate-500 leading-relaxed pb-8 text-lg'>Make your wedding day truly magical with Bakulful Restaurant wedding catering services. We understand that your wedding is a reflection of your love story, and our catering service ensures that every dish is a work of art. Our menu offers a diverse range of elegant dining options that complement the grandeur of your special day. What sets us apart is our full-service approach. We take care of every detail, from table settings to personalized menus, creating a romantic atmosphere and a memorable dining experience. Our dedicated team of experienced professionals has catered to numerous weddings and is committed to making your day stress-free and extraordinary. Trust us to turn your wedding into a culinary masterpiece.!</p>
                </div>
                <div className='text-center'>
                    <p className='w-1 mx-auto' ><FaBusinessTime className='text-3xl' /></p>
                    <h1 className='text-3xl font-medium mb-4' >Business Party</h1>
                    <p className='text-slate-500 leading-relaxed pb-8 text-lg'>Impress your clients, partners, and colleagues with Bakulful Restaurant business event catering. Our service is designed to reflect the professionalism and sophistication of your corporate gatherings. We offer a range of catering options, from casual corporate lunches to elegant business dinners, ensuring a culinary experience that suits your specific requirements. Timeliness and efficiency are paramount in the business world, and we guarantee that your catering will be delivered and served on schedule. Our experienced staff ensures your event runs smoothly, allowing you to focus on your business objectives while we take care of the culinary details.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;