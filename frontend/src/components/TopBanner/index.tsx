import Icon from '../common/icon';
import styles from './styles.module.css';
import type { FC } from 'react';
const DESC_ITEMS = [
  {
    id: 1,
    title: 'Only professionally-vetted doctors',
  },
  {
    id: 2,
    title: 'Personal support service',
  },
  {
    id: 3,
    title: 'Satisfaction & price match guarantee',
  },
];
const TopBanner: FC = () => {
  return (
    <>
      <div className={styles.topBanner}>
        <h1 className={styles.topBannerTitle}>FUE Hair Transplant Clinics</h1>
        <div className={styles.desc}>
          {DESC_ITEMS.map((item) => (
            <div className={styles.descItems} key={item.id}>
              <div className={styles.icon}>
                <Icon link="/images/check.svg" />
              </div>
              <p style={{ margin: 0 }}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopBanner;
