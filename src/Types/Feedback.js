import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string,
  comment: PropTypes.string,
  computed_browser: PropTypes.shape({
    Browser: PropTypes.string,
    Version: PropTypes.string,
  }),
  rating: PropTypes.number,
});
