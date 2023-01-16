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
  return (
    <>
      <div className="container">
        <Header />
        <ImageBanner
          data={{
            image: data.avatarUrl,
            name: data.name,
          }}
        />
        <TextBanner data={data} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug;

  const { data }: { data: Doctor } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${slug}`,
  );

  return {
    props: { data },
  };
};

export default DoctorProfile;
