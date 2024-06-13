import { useState } from 'react';
import styles from './criminals.module.css';
import { Card } from '../';
export type Criminal = {
  name: string;
};
export const Criminals: React.FC = () => {
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
  };
  return (
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
  );
};
