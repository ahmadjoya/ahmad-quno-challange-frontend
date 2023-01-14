import Header from 'src/components/header';
import Filter from 'src/components/filter';
import TopBanner from 'src/components/TopBanner';
import DoctorList from 'src/components/doctors';
import styles from '../styles/doctors.module.css';
import type { NextPage } from 'next';
const DOCTORS = [
  {
    id: 1,
    slug: 'slug',
    category: 'Hair Transplant',
    name: 'Dr. Emrah Cinik, MD',
    image: '/images/doctors/doctor.png',
    location: 'Istanbul, Turkey',
    rating: 9.4,
    numberOfReviews: 190,
    numberOfTreatmentsInLastYear: 1270,
    yearsOfExperience: 5,
    startFrom: 2.09,
  },
  {
    id: 2,
    slug: 'slug',
    category: 'Hair Transplant',
    name: 'Dr. Emrah Cinik, MD',
    image: '/images/doctors/doctor.png',
    location: 'Istanbul, Turkey',
    rating: 9.4,
    numberOfReviews: 190,
    numberOfTreatmentsInLastYear: 1270,
    yearsOfExperience: 5,
    startFrom: 2.09,
  },
  {
    id: 3,
    slug: 'slug',
    category: 'Hair Transplant',
    name: 'Dr. Emrah Cinik, MD',
    image: '/images/doctors/doctor.png',
    location: 'Istanbul, Turkey',
    rating: 9.4,
    numberOfReviews: 190,
    numberOfTreatmentsInLastYear: 1270,
    yearsOfExperience: 5,
    startFrom: 2.09,
  },
  {
    id: 4,
    slug: 'slug',
    category: 'Hair Transplant',
    name: 'Dr. Emrah Cinik, MD',
    image: '/images/doctors/doctor.png',
    location: 'Istanbul, Turkey',
    rating: 9.4,
    numberOfReviews: 190,
    numberOfTreatmentsInLastYear: 1270,
    yearsOfExperience: 5,
    startFrom: 2.09,
  },
  {
    id: 5,
    slug: 'slug',
    category: 'Hair Transplant',
    name: 'Dr. Emrah Cinik, MD',
    image: '/images/doctors/doctor.png',
    location: 'Istanbul, Turkey',
    rating: 9.4,
    numberOfReviews: 190,
    numberOfTreatmentsInLastYear: 1270,
    yearsOfExperience: 5,
    startFrom: 2.09,
  },
  {
    id: 6,
    slug: 'slug',
    category: 'Hair Transplant',
    name: 'Dr. Emrah Cinik, MD',
    image: '/images/doctors/doctor.png',
    location: 'Istanbul, Turkey',
    rating: 9.4,
    numberOfReviews: 190,
    numberOfTreatmentsInLastYear: 1270,
    yearsOfExperience: 5,
    startFrom: 2.09,
  },
];
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
