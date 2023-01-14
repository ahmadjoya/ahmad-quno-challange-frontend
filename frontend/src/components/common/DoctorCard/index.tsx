import Image from 'next/image';
import styles from './styles.module.css';
import type { FC } from 'react';
import type { Doctor } from './DoctorType';
const DoctorCard: FC<{ data: Doctor }> = ({ data }) => {
  return (
    <div className={styles.doctorCard}>
      <div className={styles.topOfCard}>
        <div className={styles.photoPlace}>
          <Image src={data.image} height={100} width={100} alt={data.name} />
        </div>
        <div className={styles.desc}>
          <p className={styles.category}>{data.category}</p>
          <h1 className={styles.doctorTitle}>{data.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
