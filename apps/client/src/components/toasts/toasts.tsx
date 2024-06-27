import styles from './toasts.module.css';
import { Card, Category, Divider, User } from '../';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { IconContext } from 'react-icons';
import { GiCastle } from 'react-icons/gi';

export type Toast = {
  user: User;
  toastDate: Date;
  toastDesc: string;
};
type Props = {
  isLoggedIn: boolean;
};

export const Toasts: React.FC<Props> = ({ isLoggedIn }) => {
  const [upcomingToasts, setUpcomingToasts] = useState<Toast[]>([
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2023/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
  ]);

  const [happendToasts, setHappendToasts] = useState<Toast[]>([
    {
      user: { name: 'obwdbdk' },
      toastDate: new Date('2012/9/22'),
      toastDesc:
        'Quisque mauris justo, malesuada ac nulla non, vehicula scelerisque quam.',
    },
  ]);

  return (
    <div className={styles.toasts}>
      {isLoggedIn ? (
        <>
          <Divider />

          <Category style={{ height: '50%', border: 'none' }}>
            <div className={styles.toastsCintainer}>
              <IconContext.Provider value={{ size: '1.4em' }}>
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
                    toastsDate={toast.toastDate}
                    description={toast.toastDesc}
                    stringBorder="0.1em var( ---green-border-color) solid"
                  />
                ))}
              </div>
            </div>
          </Category>

          <Divider />

          <Category style={{ border: 'none', height: '40%' }}>
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
                    toastsDate={toast.toastDate}
                    description={toast.toastDesc}
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
          <Category title="" style={{ height: '90%', border: 'none' }}>
            <div className={styles.toastsCintainer}>
              <div className={styles.toastsGridNotLoggedIn}>
                {upcomingToasts.map((toast, index) => (
                  <Card
                    key={index}
                    title={toast.user.name}
                    toastsDate={toast.toastDate}
                    description={toast.toastDesc}
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
