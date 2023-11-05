import React from 'react';
import styles from './app.module.css';
import { LeftBlock } from './components/LeftBlock';
import { RightBlock } from './components/RightBlock';


const App = () => {
  return (
    <div className={styles.container}>
      <LeftBlock />
      <RightBlock />
    </div>
  );
};

export default App;