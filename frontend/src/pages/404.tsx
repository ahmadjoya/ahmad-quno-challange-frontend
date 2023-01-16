import Link from 'next/link';
import styles from '../styles/404.module.css';
import type { FC } from 'react';

const NotFound: FC = (): JSX.Element => {
  return (
    <section className={styles.page_404}>
      <div className="container">
        <div className="col-sm-12 ">
          <div className={styles.textCenter}>
            <div className={styles.fourZeroFourBg}>
              <h1 className={styles.textCenter}>404</h1>
            </div>

            <div className={styles.contantBox_404}>
              <h3 className="h2">Look like you&#39;re lost</h3>

              <p>the page you are looking for, is not available!</p>

              <Link href="/doctors" className={styles.link_404}>
                Go to Doctors Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
