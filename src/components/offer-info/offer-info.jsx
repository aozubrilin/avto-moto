import React from 'react';
import CAR from '../../mocks/car';

const OfferInfo = () => {
  const { name, price, oldPrice, feauteres, creditPrice } = CAR;

  const feauteresList = feauteres.map((item, index) => (
    <li className="info__feauteres-item" key={`${index}-${item}`}>
      {item}
    </li>
  ));

  return (
    <section className="offer__info info">
      <h2 className="info__title">{name}</h2>
      <ul className="info__feauteres-list">{feauteresList}</ul>
      <div className="info__price-block">
        <span className="info__current-price">{price} &#8381;</span>
        <span className="info__old-price">{oldPrice} &#8381;</span>
      </div>
      <a className="info__request button" href="/">
        оставить заявку
      </a>
      <a className="info__credit button button--white" href="/">
        В КРЕДИТ ОТ {creditPrice} &#8381;
      </a>
    </section>
  );
};

export default OfferInfo;
