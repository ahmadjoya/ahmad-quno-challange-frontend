import Header from 'src/components/header';
import Filter from 'src/components/filter';
import TopBanner from 'src/components/TopBanner';
import DoctorList from 'src/components/doctors';
import { DOCTORS } from 'src/constants/doctors';
import axios from 'axios';
import type { GetServerSideProps } from 'next';
import styles from '../styles/doctors.module.css';
import type { NextPage } from 'next';
import type { Doctor } from 'src/types/Doctor';
const Doctors: NextPage<{ data: Doctor[] }> = ({
  data,
}: {
  data: Doctor[];
}) => {
  console.log('data', data);
  return (
    <>
      <Header />
      <TopBanner />
      <Filter />
      <DoctorList doctors={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug;
  console.log('slug', slug);
  const { data }: { data: Doctor[] } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  );
  console.log('data', data);
  return {
    props: { data },
  };
};

export default Doctors;
