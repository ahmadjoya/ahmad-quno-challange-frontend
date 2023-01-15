import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import type { FC } from 'react';
import type { Doctor } from './DoctorType';
const DoctorCard: FC<{ data: Doctor }> = ({ data }) => {
  return (
    <div className={styles.doctorCard}>
      <div className={styles.topOfCard}>
        <div className={styles.photoPlace}>
          <Image src={data.image} height={100} width={100} alt={data.name} />
        </div>
        <div className={styles.desc}>
          <p className={styles.category}>{data.category}</p>
          <h1 className={styles.doctorTitle}>{data.name}</h1>
          <div className={styles.location}>
            <Image
              src="/images/location.svg"
              width={24}
              height={24}
              alt="Location Icon"
            />
            <p style={{ margin: 0 }}>{data.location}</p>
          </div>
        </div>
      </div>
      <div className={styles.middleOfCard}>
        <div className={styles.qunoScorePlace}>
          <div className={styles.qunoScoreContainer}>
            <span className={styles.qunoScoreNumber}>{data.qunoScore}</span>
          </div>
          <span style={{ fontWeight: 'bold' }}>Excellent</span>
          <span style={{ textTransform: 'uppercase' }}>Qunoscore</span>
        </div>
        <div className={styles.desc}>
          <div className={styles.ratingItem}>
            <Image
              src="/images/star.svg"
              width={24}
              height={24}
              alt="Location Icon"
            />
            <p style={{ margin: 0 }}>
              <span style={{ fontWeight: 'bold' }}>{data.rating}</span>
              <span style={{ textTransform: 'uppercase' }}>
                ({data.numberOfReviews} Reviews)
              </span>
            </p>
          </div>
          <div className={styles.ratingItem}>
            <Image
              src="/images/check.svg"
              width={24}
              height={24}
              alt="Location Icon"
            />
            <div className={styles.ratingItemDesc}>
              <span>
                {data.numberOfTreatmentsInLastYear} treatments last year
              </span>
            </div>
          </div>
          <div className={styles.ratingItem}>
            <Image
              src="/images/check.svg"
              width={24}
              height={24}
              alt="Location Icon"
            />
            <div className={styles.ratingItemDesc}>
              <span>{data.yearsOfExperience} years of experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomOfCard}>
        <div className={styles.pricing}>
          <p>starting from</p>
          <p style={{ fontWeight: 'bold' }}>&euro;{data.startFrom}</p>
        </div>
        <div className={styles.seeProfile}>
          <button className={styles.seeProfileButton}>
            <Link href={`/doctors/${data.slug}`}>See Doctor Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
