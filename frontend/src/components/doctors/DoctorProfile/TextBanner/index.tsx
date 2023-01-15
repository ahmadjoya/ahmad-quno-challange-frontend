import subtractYears from 'src/utils/experienceToYear';
import Icon from '../../../common/icon';
import styles from './styles.module.css';
import type { Doctor } from 'src/types/Doctor';
import type { FC } from 'react';

const TextBanner: FC<{ data: Doctor }> = ({ data }: { data: Doctor }) => {
  return (
    <>
      <div className={styles.textBanner}>
        <div className={styles.overView}>
          <p className={styles.categoryText}>Hair Transplant</p>
          <h1 className={styles.textBannerTitle}>{data.name}</h1>
          <div className={styles.descItems}>
            <div className={styles.icon}>
              <Icon link="/images/location.svg" />
            </div>
            <p>
              {data.city}, {data.country}
            </p>
          </div>
        </div>
        <div className={styles.qunoScore}>
          <div className={styles.qunoScoreNumber}>{data.qunoScoreNumber}</div>

          <div className={styles.qunoScoreDesc}>
            <span className={styles.qunoScoreStatus}>{data.qunoScoreText}</span>
            <span className={styles.qunoScoreDescTitle}>Qunoscore</span>
          </div>
        </div>

        <div className={styles.desc}>
          <div className={styles.descItems}>
            <div className={styles.icon}>
              <Icon link={'/images/star.svg'} />
            </div>
            <p className="m-0">{data.ratingsAverage} (190 Reviews)</p>
          </div>
          <div className={styles.descItems}>
            <div className={styles.icon}>
              <Icon link={'/images/heart.svg'} />
            </div>
            <p className="m-0">{data.qunoScoreNumber * 10}% would recommend</p>
          </div>
          <div className={styles.descItems}>
            <div className={styles.icon}>
              <Icon link={'/images/check.svg'} />
            </div>
            <p className="m-0">High demand doctor</p>
          </div>
          <div className={styles.descItems}>
            <div className={styles.icon}>
              <Icon link={'/images/check.svg'} />
            </div>
            <p className="m-0">
              <>
                Practising since{' '}
                {subtractYears(new Date(), data.yearsExperience).getFullYear()}
              </>
            </p>
          </div>
          <div className={styles.descItems}>
            <div className={styles.icon}>
              <Icon link={'/images/check.svg'} />
            </div>
            <p className="m-0">
              8 E.Max Veneers + Teeth Whitening Package from €{data.basePrice}
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button>Get consultation</button>
          <button>Book appointment</button>
        </div>
      </div>
    </>
  );
};

export default TextBanner;
