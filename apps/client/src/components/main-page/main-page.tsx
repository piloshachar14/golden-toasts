import styles from './main-page.module.css';
import { Heading, Category, Criminals, Toasts, Record } from '..';
import {
  useSignUpMutation,
  useLoginMutation,
  useGetUserByIdQuery,
} from '../../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

export const MainPage: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signUpResult',
  });
  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signInResult',
  });

  const { data: userData } = useGetUserByIdQuery(userId, {
    skip: !userId,
  });

  useEffect(() => {
    if (signUpData?.id) {
      setUserId(signUpData.id);
    } else if (signInData?.id) {
      setUserId(signInData.id);
    }
  }, [signUpData, signInData]);

  return (
    <div className={styles.container}>
      <Heading
        title={
          userData
            ? `מה שלומך היום, ${userData.fullName}?`
            : '!ברוך הבא למדור ביצועים'
        }
        isLogin={signUpData || signInData ? true : false}
      />
      <div className={styles.categories}>
        {signUpData || signInData ? (
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
      <ToastContainer position="top-right" />
    </div>
  );
};
