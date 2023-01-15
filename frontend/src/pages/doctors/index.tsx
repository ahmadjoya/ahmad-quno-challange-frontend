import Header from 'src/components/header';
import Filter from 'src/components/filter';
import TopBanner from 'src/components/TopBanner';
import DoctorList from 'src/components/doctors';
import { DOCTORS } from 'src/constants/doctors';
import styles from '../styles/doctors.module.css';
import type { NextPage } from 'next';
const Doctors: NextPage = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <Filter />
      <DoctorList doctors={DOCTORS} />
    </>
  );
};

export default Doctors;
