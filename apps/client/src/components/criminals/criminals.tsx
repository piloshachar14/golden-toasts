import { useState } from 'react';
import styles from './criminals.module.css';
import { Card, Category } from '../';
import { BlockTwoTone } from '@mui/icons-material';
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
      <div className={styles.divider} />
      <Category
        title=":בני עוולה רגילים"
        style={{ height: '50%', border: 'none' }}
      >
        <div className={styles.criminalsContainer}>
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
      </Category>
      <div className={styles.divider} />
      <Category
        title=":פרסונה נון גרטה לא עלינו"
        style={{ height: '50%', border: 'none' }}
      >
        <div className={styles.criminalsContainer}>
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
