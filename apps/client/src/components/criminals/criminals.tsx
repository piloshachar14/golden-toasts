import { useState } from 'react';
import styles from './criminals.module.css';
import { Card, Category, Divider } from '../';
import { Tooltip } from 'react-tooltip';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export type User = {
  name: string;
  armyID?: string;
};
export const Criminals: React.FC = () => {
  const [criminals, setCriminals] = useState<User[]>([
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
    { name: 'תומר שטיינברג' },
    { name: 'תומר שטיינברג' },
  ]);
  const [personaNonGratas, setpersonaNonGratas] = useState<User[]>([
    { name: 'hifehn' },
    { name: 'hifehn' },
  ]);
  const handleCriminalAdd = () => {
    const NewCriminal = { name: '' };
  };
  return (
    <div className={styles.criminals}>
      <Divider />

      <Category style={{ height: '50%', border: 'none' }}>
        <div className={styles.criminalsContainer}>
          <IconContext.Provider value={{ size: '1.2em' }}>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                stringBorder="0.1em var(---red-border-color) solid"
                descriptionStyle={{
                  fontSize: 'small',
                  textAlign: 'end',
                  paddingRight: '1em',
                  paddingBottom: '0.5em',
                }}
              />
            ))}
          </div>
        </div>
      </Category>

      <Divider />

      <Category style={{ border: 'none', height: '40%' }}>
        <div className={styles.criminalsContainer}>
          <IconContext.Provider value={{ size: '1.2em' }}>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                stringBorder="0.1em white solid"
                descriptionStyle={{
                  fontSize: 'small',
                  textAlign: 'end',
                  paddingRight: '1em',
                  paddingBottom: '0.5em',
                }}
              />
            ))}
          </div>
        </div>
      </Category>
    </div>
  );
};
