import React, { useState } from 'react';
import CAR from '../../mocks/car';

const Slider = () => {
  const { images, previewImages, isNewModel } = CAR;
  const [activeIndex, setActiveIndex] = useState(0);
  const { image, description } = images[activeIndex];

  const previewImagesList = previewImages.map(
    ({ image, description }, index) => (
      <li className="slider__preview-item" key={index}>
        <img src={image} width="128" height="80" alt={description} />
      </li>
    )
  );

  return (
    <section className="offer__slider slider">
      <div
        className={`slider__image ${
          isNewModel ? 'slider__image--new-model' : ''
        }`}
      >
        <img src={image} width="600" height="375" alt={description} />
      </div>
      <div className="slider__nav">
        <button
          className="slider__button button-arrow button-arrow--left"
          type="button"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
        />
        <ul className="slider__preview-list">{previewImagesList}</ul>
        <button
          className="slider__button button-arrow"
          type="button"
          disabled={activeIndex === images.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
        />
      </div>
    </section>
  );
};

export default Slider;
