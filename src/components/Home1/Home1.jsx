import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import AboutUsBanner from '../AboutUsBanner/AboutUsBanner';
import PromisePage from '../PromisePage/PromisePage';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import ChefsSection from '../../ChefsSection/ChefsSection';


const Home1 = () => {
    return (
        <div>
           <HomeBanner></HomeBanner>
           <AboutUsBanner></AboutUsBanner>
           <PromisePage></PromisePage>
           <ChefsSection></ChefsSection>
           <Services></Services>
           <Footer></Footer>
           
        </div>
    );
};

export default Home1; <h3>This is first home</h3>