/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageBanner from 'src/components/doctors/DoctorProfile/ImageBanner';
import Header from 'src/components/header';
import TextBanner from 'src/components/doctors/DoctorProfile/TextBanner';
import axios from 'axios';
import type { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import type { Doctor } from 'src/types/Doctor';

const DoctorProfile: NextPage<{ data: Doctor }> = ({
  data,
}: {
  data: Doctor;
}) => {
  console.log('data', data);
  return (
    <>
      <Header />
      <ImageBanner
        data={{
          image: data.avatarUrl,
          name: data.name,
        }}
      />
      <TextBanner data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug;
  console.log('slug', slug);
  const { data }: { data: Doctor } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${slug}`,
  );
  console.log('data', data);
  return {
    props: { data },
  };
};

export default DoctorProfile;
