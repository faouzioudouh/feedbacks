import PropTypes from 'prop-types';

export default PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    activeItems: PropTypes.arrayOf(PropTypes.any).isRequired,
    onClick: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    itemConverter: PropTypes.func,
});


