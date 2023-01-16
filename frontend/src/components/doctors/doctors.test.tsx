/* eslint-disable react/no-unknown-property */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DoctorList from './index';
import type { Doctor } from 'src/types/Doctor';
const doctors: Doctor[] = [
  {
    name: 'Dr. Lay Raphael',
    city: 'Citampian',
    country: 'Indonesia',
    qunoScoreNumber: 8.5,
    ratingsAverage: 4.8,
    treatmentsLastYear: 2490,
    yearsExperience: 15,
    basePrice: 1355.76,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-lay-raphael',
    qunoScoreText: 'Very Good',
  },
  {
    name: 'Dr. Wallie Lagden',
    city: 'Roza',
    country: 'Russia',
    qunoScoreNumber: 7.1,
    ratingsAverage: 4.5,
    treatmentsLastYear: 2218,
    yearsExperience: 7,
    basePrice: 4934.98,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-wallie-lagden',
    qunoScoreText: 'Good',
  },
  {
    name: 'Dr. Monty Guinan',
    city: 'Dehui',
    country: 'China',
    qunoScoreNumber: 7.2,
    ratingsAverage: 4,
    treatmentsLastYear: 1980,
    yearsExperience: 6,
    basePrice: 1244.82,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-monty-guinan',
    qunoScoreText: 'Good',
  },
  {
    name: 'Dr. Allis Outridge',
    city: 'Świnice Warckie',
    country: 'Poland',
    qunoScoreNumber: 8.3,
    ratingsAverage: 3.5,
    treatmentsLastYear: 392,
    yearsExperience: 11,
    basePrice: 1387.41,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-allis-outridge',
    qunoScoreText: 'Very Good',
  },
  {
    name: 'Dr. Cayla Loftie',
    city: 'El Paso',
    country: 'United States',
    qunoScoreNumber: 9.7,
    ratingsAverage: 4.1,
    treatmentsLastYear: 1270,
    yearsExperience: 5,
    basePrice: 3715.79,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-cayla-loftie',
    qunoScoreText: 'Excelent',
  },
  {
    name: 'Dr. Zak Beesley',
    city: 'San Antonio',
    country: 'Mexico',
    qunoScoreNumber: 9.6,
    ratingsAverage: 3.9,
    treatmentsLastYear: 2775,
    yearsExperience: 5,
    basePrice: 1604.71,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-zak-beesley',
    qunoScoreText: 'Excelent',
  },
  {
    name: 'Dr. Linus Rogier',
    city: 'Xilanqi',
    country: 'China',
    qunoScoreNumber: 8.7,
    ratingsAverage: 5,
    treatmentsLastYear: 1446,
    yearsExperience: 5,
    basePrice: 4185.5,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-linus-rogier',
    qunoScoreText: 'Very Good',
  },
  {
    name: 'Dr. Annora Chiddy',
    city: 'Jishigang',
    country: 'China',
    qunoScoreNumber: 8.2,
    ratingsAverage: 4.8,
    treatmentsLastYear: 497,
    yearsExperience: 15,
    basePrice: 3732.29,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-annora-chiddy',
    qunoScoreText: 'Very Good',
  },
  {
    name: 'Dr. Scotty Baroc',
    city: 'Draguignan',
    country: 'France',
    qunoScoreNumber: 6.6,
    ratingsAverage: 4.2,
    treatmentsLastYear: 2656,
    yearsExperience: 9,
    basePrice: 3415.44,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-scotty-baroc',
    qunoScoreText: 'Regular',
  },
  {
    name: 'Dr. Matthus Fitzjohn',
    city: 'Kowang Utara',
    country: 'Indonesia',
    qunoScoreNumber: 7.2,
    ratingsAverage: 4,
    treatmentsLastYear: 1390,
    yearsExperience: 13,
    basePrice: 3651.54,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    slug: 'dr-matthus-fitzjohn',
    qunoScoreText: 'Good',
  },
];
describe('DoctorList', () => {
  it('should render correctly', () => {
    const { getByText } = render(<DoctorList doctors={doctors} />);
    expect(getByText('Dr. Lay Raphael').textContent).toBe('Dr. Lay Raphael');
    expect(getByText('Dr. Allis Outridge').textContent).toBe(
      'Dr. Allis Outridge',
    );
  });
});
