import styles from './toasts.module.css';
import { Card, Category, Divider } from '../';
import { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { IconContext } from 'react-icons';
import { GiCastle } from 'react-icons/gi';

import {
  useGetHappendToastsQuery,
  useGetPendingToastsQuery,
  useLazyGetUserByIdQuery,
} from '../../store';
import { Toast, ToastWithUserName } from '../../types';

type Props = {
  isLoggedIn: boolean;
};

export const Toasts: React.FC<Props> = ({ isLoggedIn }) => {
  const { data: pendingToasts, isLoading: loadingPending } =
    useGetPendingToastsQuery();
  const { data: happenedToasts, isLoading: loadingHappened } =
    useGetHappendToastsQuery();
  const [pendingToastsWithUsers, setPendingToastsWithUsers] = useState<
    ToastWithUserName[]
  >([]);
  const [happenedToastsWithUsers, setHappenedToastsWithUsers] = useState<
    ToastWithUserName[]
  >([]);

  const [triggerGetUserById] = useLazyGetUserByIdQuery();

  const fetchToastsWithUsers = async (
    toastsArray: Toast[],
    setToastsWithUsers: React.Dispatch<
      React.SetStateAction<ToastWithUserName[]>
    >
  ) => {
    if (pendingToasts) {
      const toastsWithUsers = await Promise.all(
        toastsArray.map(async (toast) => {
          const userResponse = await triggerGetUserById(toast.userId);
          const user = userResponse.data;
          return { ...toast, userName: user?.fullName || 'Unknown' };
        })
      );
      setToastsWithUsers(toastsWithUsers);
    }
  };

  useEffect(() => {
    if (happenedToasts) {
      fetchToastsWithUsers(happenedToasts, setHappenedToastsWithUsers);
    }
    if (pendingToasts) {
      fetchToastsWithUsers(pendingToasts, setPendingToastsWithUsers);
    }
  }, [happenedToasts, triggerGetUserById, pendingToasts]);

  const mapFunction = (toastsWithUsers: ToastWithUserName[]) => {
    return toastsWithUsers.map(
      ({ userName, date, desc, fluids, solids }, index) => (
        <Card
          key={index}
          title={userName}
          toastsDate={date}
          description={desc}
          fluids={fluids}
          solids={solids}
          stringBorder="0.1em var( ---green-border-color) solid"
        />
      )
    );
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
                {mapFunction(pendingToastsWithUsers)}
              </div>
            </div>
          </Category>

          <Divider />

          <Category className={styles.pastToastsCategory}>
            <div className={styles.toastsCintainer}>
              <IconContext.Provider value={{ size: '1.4em' }}>
                <div className={styles.button}>
                  <GiCastle
                    className={`${styles.archiveToasts} archiveToasts `}
                  />
                  <Tooltip anchorSelect=".archiveToasts" place="top">
                    שתיות שעברו
                  </Tooltip>
                </div>
              </IconContext.Provider>
              <div className={styles.toastsGridLoggedIn}>
                {mapFunction(happenedToastsWithUsers)}
              </div>
            </div>
          </Category>
        </>
      ) : (
        <>
          <Divider />
          <Category title="" className={styles.logoutToastsCategory}>
            <div className={styles.toastsCintainer}>
              <div className={styles.toastsGridNotLoggedIn}>
                {mapFunction(pendingToastsWithUsers)}
              </div>
            </div>
          </Category>
        </>
      )}
    </div>
  );
};
