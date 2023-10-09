import React from 'react';
import LightGallery from 'lightgallery/react';
import lg1 from '../../assets/LightGallery/daniel-mathew-q-7nfjj4Dxk-unsplash.jpg'
import lg2 from '../../assets/LightGallery/janos-venczak-h7roZ9aDNKc-unsplash.jpg'
import lg3 from '../../assets/LightGallery/nils-stahl-BCkLxilDvJU-unsplash.jpg'
import lg4 from '../../assets/LightGallery/PromiseLeft.jpg'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';



const LightAlbum = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className='App'>
               <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="img/img1.jpg">
                    <img alt="img1" src={lg1}/>
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src={lg2}/>
                </a>
                ...
            </LightGallery>
        </div>
    );
};
 
export default LightAlbum;