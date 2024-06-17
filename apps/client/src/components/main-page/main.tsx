import styles from './main.module.css';
import { Heading, Category, Criminals, Toasts } from '../';
import { useState } from 'react';
export const MainPage: React.FC = () => {
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
      />

      <div className={styles.categories}>
        {isLoggedIn ? (
          <>
            <Category style={{ width: '33%', height: '100%' }} title=":שיא" />
            <Category style={{ width: '33%', height: '100%' }} title=":שתיות">
              <Toasts isLoggedIn={true}></Toasts>
            </Category>
            <Category
              style={{ width: '33%', overflow: 'scroll', height: '100%' }}
              title="!פושעים"
            >
              <Criminals />
            </Category>
          </>
        ) : (
          <Category style={{ width: '100%' }} title=":שתיות קרובות">
            <Toasts isLoggedIn={false} />
          </Category>
        )}
      </div>
    </div>
  );
};
