import PropTypes from 'prop-types';
import LargePasswordDisplayCell from './components/LargePasswordDisplayCell';
import styles from './LargePasswordDisplay.module.scss';

const LargePasswordDisplay = ({ text }) => {
  const chars = [...text];

  return (
    <div className={styles.container}>
      {chars.map((char, index) => (
        <LargePasswordDisplayCell
          key={`${char}-${index}}`}
          charNumber={index + 1}
        >
          {char}
        </LargePasswordDisplayCell>
      ))}
    </div>
  );
};

LargePasswordDisplay.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LargePasswordDisplay;
