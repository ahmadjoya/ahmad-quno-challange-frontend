import DoctorCard from '../common/DoctorCard';
import styles from './styles.module.css';
import type { FC } from 'react';
import type { Doctor } from '../../types/Doctor';
const DoctorList: FC<{ doctors: Doctor[] }> = ({ doctors }): JSX.Element => {
  return (
    <div className={styles.doctors}>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.slug} data={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
