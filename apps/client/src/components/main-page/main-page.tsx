import styles from './main-page.module.css';
import { Heading, Category, Criminals, Toasts, Record } from '..';
import { useSignUpMutation, useLoginMutation } from '../../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainPage: React.FC = () => {
  const [_, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signupResult',
  });

  const [__, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signinResult',
  });
  return (
    <div className={styles.container}>
      <Heading
        title={
          signUpData || signInData
            ? `  ${
                (signInData && signInData.fullName) ||
                (signUpData && signUpData.fullName)
              } מה שלומך היום?`
            : '!ברוך הבא למדור ביצועים'
        }
        isLogin={signUpData || signInData ? true : false}
      />
      <div className={styles.categories}>
        {signUpData || signInData ? (
          <>
            <Category style={{ width: '33%', height: '100%' }} title=":שיא">
              <Record />
            </Category>

            <Category style={{ width: '33%', height: '100%' }} title=":שתיות">
              <Toasts isLoggedIn={true} />
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
      <ToastContainer position="top-right" />
    </div>
  );
};
