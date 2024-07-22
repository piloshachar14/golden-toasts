import { useState } from 'react';
import styles from './criminals.module.css';
import { Card, Category, Divider } from '../';
import { Tooltip } from 'react-tooltip';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { User } from '../../types';

export const Criminals: React.FC = () => {
  const [criminals, setCriminals] = useState<User[]>([]);
  const [personaNonGratas, setpersonaNonGratas] = useState<User[]>([]);

  return (
    <div className={styles.criminals}>
      <Divider />

      <Category className={styles.criminalsCategory}>
        <div className={styles.criminalsContainer}>
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <div className={styles.button}>
              <GiPirateFlag
                className={`${styles.regularCriminalsIcon} regularCiminalsIcon`}
              />
              <Tooltip anchorSelect=".regularCiminalsIcon" place="top">
                בני עוולה רגילים
              </Tooltip>
            </div>
          </IconContext.Provider>

          <div className={styles.criminalsGrid}>
            {criminals.map((criminal, index) => (
              <Card
                key={index}
                title={criminal.name}
                description=":שתיות מפשיעות
          Lorrem ipsum dolor sit amet, consectetur adipiscing elit."
                stringBorder="0.1rem var(---red-border-color) solid"
                descriptionStyle={{
                  fontSize: 'small',
                  textAlign: 'end',
                  paddingRight: '1rem',
                  paddingBottom: '0.5rem',
                }}
              />
            ))}
          </div>
        </div>
      </Category>

      <Divider />

      <Category className={styles.personaNonGrataCategory}>
        <div className={styles.criminalsContainer}>
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <div className={styles.button}>
              <GiPirateGrave
                className={`${styles.personaNonGrataIcon} personaNonGrataIcon `}
              />
              <Tooltip anchorSelect=".personaNonGrataIcon" place="top">
                פרסונה נון גרטה לא עלינו
              </Tooltip>
            </div>
          </IconContext.Provider>
          <div className={styles.criminalsGrid}>
            {personaNonGratas.map((pesonaNonGrata, index) => (
              <Card
                key={index}
                title={pesonaNonGrata.name}
                description=":שתיות מפשיעות
          Lorrem ipsum dolor sit amet, consectetur adipiscing elit."
                stringBorder="0.1rem white solid"
                descriptionStyle={{
                  fontSize: 'small',
                  textAlign: 'end',
                  paddingRight: '1rem',
                  paddingBottom: '0.5rem',
                }}
              />
            ))}
          </div>
        </div>
      </Category>
    </div>
  );
};
