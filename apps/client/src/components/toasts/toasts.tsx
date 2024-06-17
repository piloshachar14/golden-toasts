import styles from './toasts.module.css';
import { Card, Category, User } from '../';
import { useState } from 'react';

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
          <Category title=":שתיות קרובות" style={{ height: '34vh' }}>
            <div className={styles.toastsContainerLoggedIn}>
              {upcomingToasts.map((toast, index) => (
                <Card
                  key={index}
                  title={toast.user.name}
                  toastsDate={toast.toastDate}
                  desc={toast.toastDesc}
                  stringBorder="2px chartreuse solid"
                />
              ))}
            </div>
          </Category>
          <Category title=":שתיות שעברו" style={{ height: '34vh' }}>
            <div className={styles.toastsContainerLoggedIn}>
              {happendToasts.map((toast, index) => (
                <Card
                  key={index}
                  title={toast.user.name}
                  toastsDate={toast.toastDate}
                  desc={toast.toastDesc}
                  stringBorder="2px rgb(200, 22, 22) solid"
                />
              ))}
            </div>
          </Category>
        </>
      ) : (
        <Category title="" style={{ height: '70vh', border: 'none' }}>
          <div className={styles.toastsContainerNotLoggedIn}>
            {upcomingToasts.map((toast, index) => (
              <Card
                key={index}
                title={toast.user.name}
                toastsDate={toast.toastDate}
                desc={toast.toastDesc}
                stringBorder="2px chartreuse solid"
              />
            ))}
          </div>
        </Category>
      )}
    </div>
  );
};