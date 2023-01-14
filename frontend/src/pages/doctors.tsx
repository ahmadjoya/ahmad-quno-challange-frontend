import Header from 'src/components/header';
import styles from '../styles/doctors.module.css';
import type { NextPage } from 'next';
import TopBanner from 'src/components/TopBanner';
const Doctors: NextPage = () => {
  return (
    <>
      <Header />
      <TopBanner />
    </>
  );
};

export default Doctors;
