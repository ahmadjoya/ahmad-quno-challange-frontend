import DoctorCard from '../common/DoctorCard';
import styles from './styles.module.css';
import type { FC } from 'react';
import type { Doctor } from '../common/DoctorCard/DoctorType';
const DoctorList: FC<{ doctors: Doctor[] }> = ({ doctors }) => {
  return (
    <div className={styles.doctors}>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} data={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
