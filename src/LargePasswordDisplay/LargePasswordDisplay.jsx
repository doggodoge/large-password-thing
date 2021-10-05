import PropTypes from 'prop-types';
import LargePasswordDisplayCell from './components/LargePasswordDisplayCell';

const LargePasswordDisplay = ({ text }) => (
    <LargePasswordDisplayCell index="12">h</LargePasswordDisplayCell>
);

LargePasswordDisplay.propTypes = {
    text: PropTypes.string.isRequired,
}

export default LargePasswordDisplay;
