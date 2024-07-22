import { useState } from 'react';
import styles from './criminals.module.css';
import { Card, Category, Divider } from '../';
import { Tooltip } from 'react-tooltip';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import {
  useGetAllNonPersonaNonGratasQuery,
  useGetAllPersonaNonGratasQuery,
} from '../../store';

export const Criminals: React.FC = () => {
  const { data: CriminalsData } = useGetAllNonPersonaNonGratasQuery();
  const { data: PersonaNonGratasData } = useGetAllPersonaNonGratasQuery();
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
            {CriminalsData?.map((criminal, index) => (
              <Card
                key={index}
                toastsDate={criminal.createdAt}
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
            {PersonaNonGratasData?.map((pesonaNonGrata, index) => (
              <Card
                key={index}
                toastsDate={pesonaNonGrata.createdAt}
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
