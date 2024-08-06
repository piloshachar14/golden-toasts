import styles from './toasts.module.css';
import { Category, Divider, ToastsCard } from '../';
import { FaCalendarAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { IconContext } from 'react-icons';
import { GiBookmark } from 'react-icons/gi';

import {
  useGetAllHappenedQuery,
  useGetAllPendingToastsQuery,
  useLoginMutation,
  useSignUpMutation,
} from '../../store';
import { Toast } from '../../store';

type Props = {
  isLoggedIn: boolean;
};

export const Toasts: React.FC<Props> = ({ isLoggedIn }) => {
  const { data: happenedToasts } = useGetAllHappenedQuery();
  const { data: pendingToast } = useGetAllPendingToastsQuery();
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signUpResult',
  });
  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signInResult',
  });

  const mapFunction = (toasts: Toast[]) => {
    return toasts.map((toast, index) => (
      <ToastsCard key={index} toast={toast} stringBorder="0.1rem white solid" />
    ));
  };
  const adminMapFunction = (toasts: Toast[]) => {
    return toasts.map((toast, index) => (
      <ToastsCard
        isEditable={true}
        key={index}
        toast={toast}
        stringBorder="0.1rem white solid"
      />
    ));
  };
  return (
    <div className={styles.toasts}>
      {isLoggedIn ? (
        <>
          <Divider />

          <Category className={styles.currentToastCategory}>
            <div className={styles.toastsCintainer}>
              <IconContext.Provider value={{ size: '1.4rem' }}>
                <div className={styles.button}>
                  <FaCalendarAlt className={`${styles.calender} calender `} />
                  <Tooltip anchorSelect=".calender" place="top">
                    שתיות קרובות
                  </Tooltip>
                </div>
              </IconContext.Provider>
              <div className={styles.toastsGridLoggedIn}>
                {signUpData?.isAdmin || signInData?.isAdmin
                  ? adminMapFunction(pendingToast ?? [])
                  : mapFunction(pendingToast ?? [])}
              </div>
            </div>
          </Category>

          <Divider />

          <Category className={styles.pastToastsCategory}>
            <div className={styles.toastsCintainer}>
              <IconContext.Provider value={{ size: '1.4em' }}>
                <div className={styles.button}>
                  <GiBookmark
                    className={`${styles.archiveToasts} archiveToasts `}
                  />
                  <Tooltip anchorSelect=".archiveToasts" place="top">
                    שתיות שעברו
                  </Tooltip>
                </div>
              </IconContext.Provider>
              <div className={styles.toastsGridLoggedIn}>
                {signUpData?.isAdmin || signInData?.isAdmin
                  ? adminMapFunction(happenedToasts ?? [])
                  : mapFunction(happenedToasts ?? [])}
              </div>
            </div>
          </Category>
        </>
      ) : (
        <>
          <Divider />
          <Category className={styles.logoutToastsCategory}>
            <div className={styles.toastsCintainer}>
              <div className={styles.toastsGridNotLoggedIn}>
                {mapFunction(pendingToast ?? [])}
              </div>
            </div>
          </Category>
        </>
      )}
    </div>
  );
};
