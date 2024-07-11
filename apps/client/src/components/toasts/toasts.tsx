import styles from './toasts.module.css';
import { Card, Category, Divider } from '../';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { IconContext } from 'react-icons';
import { GiCastle } from 'react-icons/gi';
import { Toast } from '../../types';

type Props = {
  isLoggedIn: boolean;
};

export const Toasts: React.FC<Props> = ({ isLoggedIn }) => {
  const [upcomingToasts, setUpcomingToasts] = useState<Toast[]>([
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      date: new Date('2023/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
  ]);

  const [happendToasts, setHappendToasts] = useState<Toast[]>([
    {
      user: { name: 'obwdbdk' },
      date: new Date('2012/9/22'),
      desc: 'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
  ]);

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
                {upcomingToasts.map((toast, index) => (
                  <Card
                    key={index}
                    title={toast.user.name}
                    toastsDate={toast.date}
                    description={toast.desc}
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
                {happendToasts.map((toast, index) => (
                  <Card
                    key={index}
                    title={toast.user.name}
                    toastsDate={toast.date}
                    description={toast.desc}
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
                {upcomingToasts.map((toast, index) => (
                  <Card
                    key={index}
                    title={toast.user.name}
                    toastsDate={toast.date}
                    description={toast.desc}
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
