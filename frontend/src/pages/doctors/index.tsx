import Header from 'src/components/header';
import Sort from 'src/components/sortOptions';
import TopBanner from 'src/components/TopBanner';
import DoctorList from 'src/components/doctors';
import { useState } from 'react';
import axios from 'axios';
import type { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import type { Doctor } from 'src/types/Doctor';
const Doctors: NextPage<{ data: Doctor[] }> = ({
  data,
}: {
  data: Doctor[];
}) => {
  const [doctors, setDoctors] = useState<Doctor[]>([...data]);
  const [selectedTab, setSelectedTab] = useState<string>('');
  console.log('data', data);

  const sortBy = (field: string): Doctor[] => {
    if (field === 'Best reviews') {
      const sorted = doctors.sort(
        (a, b) => b.ratingsAverage - a.ratingsAverage,
      );
      setSelectedTab(field);
      setDoctors([...sorted]);
      return sorted;
    } else if (field === 'Lowest price') {
      const sorted = doctors.sort((a, b) => a.basePrice - b.basePrice);
      setSelectedTab(field);
      setDoctors([...sorted]);
      return sorted;
    } else if (field === 'Best Qunoscore') {
      const sorted = doctors.sort(
        (a, b) => b.qunoScoreNumber - a.qunoScoreNumber,
      );
      setSelectedTab(field);
      setDoctors([...sorted]);
      return sorted;
    }

    setSelectedTab(field);
    setDoctors([...data]);
    return data;
  };

  return (
    <>
      <div className="container">
        <Header />
        <TopBanner />
        <Sort sortBy={sortBy} selectedTab={selectedTab} />
        <DoctorList doctors={doctors} />
      </div>
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
