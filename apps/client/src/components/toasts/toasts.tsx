import styles from './toasts.module.css';
import { Category, Divider, ToastsCard } from '../';
import { FaCalendarAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { IconContext } from 'react-icons';
import { GiBookmark } from 'react-icons/gi';

import {
  useGetAllHappenedQuery,
  useGetAllPendingToastsQuery,
  useGetHaapaendUserToastsQuery,
  useLoginMutation,
  useSignUpMutation,
} from '../../store';
import { GetToast } from '../../store';

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

  const { data: allUserToasts } = useGetHaapaendUserToastsQuery(
    signInData?.id || signUpData?.id || ''
  );
  const showAllToasts = (toasts: GetToast[]) => {
    return toasts.map((toast, index) => (
      <ToastsCard key={index} currentToast={toast} />
    ));
  };
  const showAllAdminToasts = (toasts: GetToast[]) => {
    return toasts.map((toast, index) => (
      <ToastsCard
        isEditable={true}
        key={index}
        currentToast={toast}
        deletable={true}
      />
    ));
  };
  return (
    <div className={styles.toasts}>
      {isLoggedIn ? (
        <>
          <Divider />

          <div className={styles.pastToastsContainer}>
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
                ? showAllAdminToasts(pendingToast ?? [])
                : showAllToasts(pendingToast ?? [])}
            </div>
          </div>

          <Divider />

          <div className={styles.pendingToastsContainer1}>
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
                ? showAllAdminToasts(happenedToasts ?? [])
                : showAllToasts(allUserToasts ?? [])}
            </div>
          </div>
        </>
      ) : (
        <>
          <Category className={styles.logoutToastsCategory}>
            <div className={styles.toastsGridNotLoggedIn}>
              {showAllToasts(pendingToast ?? [])}
            </div>
          </Category>
        </>
      )}
    </div>
  );
};
