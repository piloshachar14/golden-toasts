import styles from './app.module.css';
import { Heading, Category } from '../components';
import { useState } from 'react';
import { Criminals } from '../components/criminals/criminals';
export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className={styles.container}>
      <Heading
        title={
          isLoggedIn
            ? '!נפגשים שוב תומר הפרסונה נון גרטה'
            : '!ברוך הבא למדור ביצועים'
        }
        desc={isLoggedIn ? '' : 'להרשמה  כניסה לחץ על הכפתור מימין'}
        isLogin={isLoggedIn}
      ></Heading>

      <div className={styles.categories}>
        {isLoggedIn ? (
          <>
            <Category style={{ width: '33%' }} title=":שיא" />
            <Category style={{ width: '33%' }} title=":שתיות" />
            <Category
              style={{ width: '33%', overflow: 'scroll' }}
              title="!פושעים"
            >
              <Criminals></Criminals>
            </Category>
          </>
        ) : (
          <Category style={{ width: '100%' }} title=":שתיות קרובות" />
        )}
      </div>
    </div>
  );
};
export default App;
