import React from "react";
import styles from "./LargePasswordDisplayCell.module.scss";

const generateLetterColor = (character) => {
  const isNumber = (text) => !isNaN(text);

  const isSpecialPasswordCharacter = (text) => {
    // These are the special password characters mentioned in the OWASP article
    //  here: https://owasp.org/www-community/password-special-characters
    const specialPasswordCharacters = [
      ...` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`,
    ];
    return specialPasswordCharacters.includes(text);
  };

  if (isNumber(character)) {
    return "#186cbb";
  }
  else if (isSpecialPasswordCharacter(character)) {
    return "#e51c1c";
  }
  return "#000000";
};

const LargePasswordDisplayCell = ({ charNumber, children: letter }) => {
  const evenColor = "#eaeaea";

  const backgroundColorToUse = charNumber % 2 === 0 ? evenColor : null;
  const letterColorToUse = generateLetterColor(letter);

  return (
    <div
      style={{ backgroundColor: backgroundColorToUse }}
      className={styles.container}
    >
      <p style={{ color: letterColorToUse }} className={styles.letter}>
        {letter}
      </p>
      <p className={styles.index}>{charNumber}</p>
    </div>
  );
};

export default React.memo(LargePasswordDisplayCell);
