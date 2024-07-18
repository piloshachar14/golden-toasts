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
import { Toast } from '../../types';

type Props = {
  isLoggedIn: boolean;
};
type ToastWithUserName = Toast & { userName: string };
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

  useEffect(() => {
    const fetchPendingToastsWithUsers = async () => {
      if (pendingToasts) {
        const toastsWithUsers = await Promise.all(
          pendingToasts.map(async (toast) => {
            const userResponse = await triggerGetUserById(toast.userId);
            const user = userResponse.data;
            return { ...toast, userName: user?.fullName || 'Unknown' };
          })
        );
        setPendingToastsWithUsers(toastsWithUsers);
      }
    };

    fetchPendingToastsWithUsers();
  }, [pendingToasts, triggerGetUserById]);

  useEffect(() => {
    const fetchHappenedToastsWithUsers = async () => {
      if (happenedToasts) {
        const toastsWithUsers = await Promise.all(
          happenedToasts.map(async (toast) => {
            const userResponse = await triggerGetUserById(toast.userId);
            const user = userResponse.data;
            return { ...toast, userName: user?.fullName || 'Unknown' };
          })
        );
        setHappenedToastsWithUsers(toastsWithUsers);
      }
    };

    fetchHappenedToastsWithUsers();
  }, [happenedToasts, triggerGetUserById]);

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
                {pendingToastsWithUsers?.map((toast, index) => (
                  <Card
                    key={index}
                    title={toast.userName}
                    toastsDate={toast.date}
                    description={toast.desc}
                    fluids={toast.fluids}
                    solids={toast.solids}
                    stringBorder="0.1em var( ---green-border-color) solid"
                  />
                ))}
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
                {happenedToastsWithUsers?.map((toast, index) => (
                  <Card
                    key={index}
                    title={toast.userName}
                    toastsDate={toast.date}
                    description={toast.desc}
                    fluids={toast.fluids}
                    solids={toast.solids}
                    stringBorder="0.1em var(---red-border-color) solid"
                  />
                ))}
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
                {pendingToastsWithUsers?.map((toast, index) => (
                  <Card
                    key={index}
                    title={toast.userName}
                    toastsDate={toast.date}
                    description={toast.desc}
                    fluids={toast.fluids}
                    solids={toast.solids}
                    stringBorder="2px var( ---green-border-color) solid"
                  />
                ))}
              </div>
            </div>
          </Category>
        </>
      )}
    </div>
  );
};
