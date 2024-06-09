import styles from './app.module.css';
import { Category } from '../components/category/category';
import { Heading } from '../components/heading/heading';
import { useState } from 'react';
export type loginInfo = {
  isLogIn: boolean;
};
export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className={styles.container}>
      <Heading isLogin={isLoggedIn} />
      <div className={styles.categories}>
        {isLoggedIn ? (
          <>
            <Category style={{ width: '33%' }} title="criminals!" />
            <Category style={{ width: '33%' }} title="toasts:" />
            <Category style={{ width: '33%' }} title="record" />
          </>
        ) : (
          <Category style={{ width: '100%' }} title="upcoming toasts:" />
        )}
      </div>
    </div>
  );
};
export default App;
