import React from 'react';
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Preview = () => {
    return (
        <div>
     <main className="sandbox">

    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
        </div>
    );
};

export default Preview;