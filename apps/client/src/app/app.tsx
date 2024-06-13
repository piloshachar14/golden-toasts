import styles from './app.module.css';
import { Heading, Category } from '../components';
import { useState } from 'react';
import { Card } from '../components/card/card';
export type Criminal = {
  name: string;
};
export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [criminals, setCriminals] = useState<Criminal[]>([
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'דור שטרית' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
  ]);
  const handleCriminalAdd = () => {
    const NewCriminal = { name: '' };
    setCriminals([...criminals, NewCriminal]);
  };
  return (
    <div className={styles.container}>
      <Heading
        title={
          isLoggedIn
            ? '!נפגשים שוב תומר הפרסונה נון גרטה'
            : '!ברוך הבא למדור ביצועים'
        }
        desc={isLoggedIn ? '' : 'להרשמה  כניסה לחץ על הכפתור מימין'}
        isLogin={isLoggedIn}
      ></Heading>

      <div className={styles.categories}>
        {isLoggedIn ? (
          <>
            <Category style={{ width: '33%' }} title=":שיא" />
            <Category style={{ width: '33%' }} title=":שתיות" />
            <Category
              style={{ width: '33%', overflow: 'scroll' }}
              title="!פושעים"
            >
              <div className={styles.criminals}>
                {criminals.map((criminal, index) => (
                  <Card
                    key={index}
                    name={criminal.name}
                    toasts="
                    
                    13673378638764bhjf :שתיות מפשיעות
                    nioewhegioubgewibgewiegwbik
                    lnnklngerwbnroinhroirl
                    wegniiogerogenorwl
                    jbreionreiljhreopirjiohreher"
                  />
                ))}
              </div>
            </Category>
          </>
        ) : (
          <Category style={{ width: '100%' }} title=":שתיות קרובות" />
        )}
      </div>
    </div>
  );
};
export default App;
