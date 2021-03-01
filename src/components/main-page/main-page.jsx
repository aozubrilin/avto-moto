import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import OfferInfo from '../offer-info/offer-info';
import Slider from '../slider/slider';

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="offer">
        <div className="offer__wrapper">
          <Slider />
          <OfferInfo />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
