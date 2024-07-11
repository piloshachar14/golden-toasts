import styles from './main-page.module.css';
import { Heading, Category, Criminals, Toasts, Record } from '..';
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
        isLogin={isLoggedIn}
      />

      <div className={styles.categories}>
        {isLoggedIn ? (
          <>
            <Category className={styles.loginCategory} title=":מובילים">
              <Record />
            </Category>

            <Category
              className={styles.loginCategory}
              title=":שתיות"
              toastsbutton={true}
            >
              <Toasts isLoggedIn={true} />
            </Category>
            <Category className={styles.loginCategory} title="!פושעים">
              <Criminals />
            </Category>
          </>
        ) : (
          <Category className={styles.logout} title=":שתיות קרובות">
            <Toasts isLoggedIn={false} />
          </Category>
        )}
      </div>
    </div>
  );
};
