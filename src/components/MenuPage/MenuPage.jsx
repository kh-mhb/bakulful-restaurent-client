import React from 'react';
import './MenuPage.css';

const MenuPage = () => {
  return (
    <div>
      <section id="popular" className="module">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="module-header wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <h2 className="module-title">Popular Dishes</h2>
                <h3 className="module-subtitle">Our most popular menu</h3>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
