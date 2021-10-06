import React from "react";
import styles from './LargePasswordDisplayCell.module.scss';

const isNumber = (text) => !isNaN(text);

const LargePasswordDisplayCell = ({ charNumber, children: letter }) => {
  const numberColor = '#186cbb';
  const letterColor = '#000000';
  const evenColor = '#e0e0e0'

  const backgroundColorToUse = charNumber % 2 === 0 ? evenColor : null;
  const letterColorToUse = isNumber(letter) ? numberColor : letterColor;

  return (
    <div style={{backgroundColor: backgroundColorToUse}} className={styles.container}>
      <p style={{color: letterColorToUse}} className={styles.letter}>{letter}</p>
      <p className={styles.index}>{charNumber}</p>
    </div>
  );
}

export default React.memo(LargePasswordDisplayCell);
