import styles from './main-page.module.css';
import { Heading, Category, Criminals, Toasts, Record } from '..';
import { useCreateUserMutation } from '../../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainPage: React.FC = () => {
  const [_, loginResult] = useCreateUserMutation({
    fixedCacheKey: 'signupResult',
  });
  const userName = loginResult.data?.fullName;

  return (
    <div className={styles.container}>
      <Heading
        title={
          loginResult.data
            ? ` מה שלומך היום? ${userName} נפגשים שוב`
            : '!ברוך הבא למדור ביצועים'
        }
        desc={loginResult.data ? '' : 'להרשמה  כניסה לחץ על הכפתור מימין'}
        isLogin={loginResult.data ? true : false}
      />
      <div className={styles.categories}>
        {loginResult.data ? (
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
