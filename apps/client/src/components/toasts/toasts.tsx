import styles from './toasts.module.css';
import { Card, Category, Divider, ToastsCard } from '../';
import { FaCalendarAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { IconContext } from 'react-icons';
import { GiBookmark } from 'react-icons/gi';

import {
  useGetAllHappenedQuery,
  useGetAllPendingToastsQuery,
} from '../../store';
import { Toast } from '../../store';

type Props = {
  isLoggedIn: boolean;
};

export const Toasts: React.FC<Props> = ({ isLoggedIn }) => {
  const { data: happenedToasts } = useGetAllHappenedQuery();
  const { data: pendingToast } = useGetAllPendingToastsQuery();

  const mapFunction = (toasts: Toast[]) => {
    return toasts.map(({ user, desc, date, fluids, solids }, index) => (
      <ToastsCard
        key={index}
        title={user?.fullName}
        date={date ? date : new Date()}
        description={desc}
        fluids={fluids}
        solids={solids}
        stringBorder="0.1em var( ---green-border-color) solid"
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
                {mapFunction(pendingToast ? pendingToast : [])}
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
                {mapFunction(happenedToasts ? happenedToasts : [])}
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
                {mapFunction(pendingToast ? pendingToast : [])}
              </div>
            </div>
          </Category>
        </>
      )}
    </div>
  );
};
