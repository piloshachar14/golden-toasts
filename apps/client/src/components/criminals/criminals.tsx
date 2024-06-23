import { useState } from 'react';
import styles from './criminals.module.css';
import { Card, Category, Divider } from '../';
import { BlockTwoTone, ReportGmailerrorredRounded } from '@mui/icons-material';
import { Tooltip } from 'react-tooltip';

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
      <Divider style={{ width: '100%' }} />
      <Category style={{ height: '50%', border: 'none' }}>
        <div className={styles.criminalsContainer}>
          <div className={styles.button}>
            <ReportGmailerrorredRounded
              className="button1"
              sx={{
                color: 'red',
              }}
            />
            <Tooltip anchorSelect=".button1" place="top">
              בני עוולה רגילים
            </Tooltip>
          </div>
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
      <Divider style={{ width: '100%' }} />
      <div className={styles.button}>
        <BlockTwoTone
          className="button"
          sx={{
            color: 'red',
          }}
        />
        <Tooltip anchorSelect=".button" place="top">
          פרסונה נון גרטה לא עלינו
        </Tooltip>
      </div>

      <Category style={{ border: 'none' }}>
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
      </Category>
    </div>
  );
};
