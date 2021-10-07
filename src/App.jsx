import LargePasswordDisplay from './LargePasswordDisplay';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <div className={styles.app}>
      <input
        className={styles.textInput}
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <LargePasswordDisplay text={text} />
    </div>
  );
}

export default App;
