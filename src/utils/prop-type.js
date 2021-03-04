import PropTypes from 'prop-types';

export const carPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  creditPrice: PropTypes.string.isRequired,
  images: PropTypes.shape({
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  previewImages: PropTypes.shape({
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  feauteres: PropTypes.arrayOf(PropTypes.string).isRequired,
  transmission: PropTypes.string.isRequired,
  power: PropTypes.number.isRequired,
  engineType: PropTypes.string.isRequired,
  drive: PropTypes.string.isRequired,
  engineVolume: PropTypes.number.isRequired,
  maxTorque: PropTypes.string.isRequired,
  cylinders: PropTypes.string.isRequired,
  isNewModel: PropTypes.bool.isRequired,
}).isRequired;
