import PropTypes from 'prop-types';
import LargePasswordDisplayCell from './components/LargePasswordDisplayCell';
import styles from './LargePasswordDisplay.module.scss';

const LargePasswordDisplay = ({text}) => {
  const charStack = [...text];

  return (
    <div className={styles.container}>
      {charStack.map((char, index) => (
        <LargePasswordDisplayCell charNumber={index + 1}>{char}</LargePasswordDisplayCell>
      ))}
    </div>
  );
};

LargePasswordDisplay.propTypes = {
  text: PropTypes.string.isRequired,
}

export default LargePasswordDisplay;
