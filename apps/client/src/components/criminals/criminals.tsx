import { useState } from 'react';
import styles from './criminals.module.css';
import { Card } from '../';
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
  ]);
  const handleCriminalAdd = () => {
    const NewCriminal = { name: '' };
  };
  return (
    <div className={styles.criminals}>
      {criminals.map((criminal, index) => (
        <Card
          key={index}
          title={criminal.name}
          desc=":שתיות מפשיעות
          Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          stringBorder="2px rgb(200, 22, 22) solid"
          descriptionStyle={{
            fontSize: 'small',
            textAlign: 'end',
            paddingRight: '1em',
            paddingBottom: '0.5em',
          }}
        />
      ))}
    </div>
  );
};
