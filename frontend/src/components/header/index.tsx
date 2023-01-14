import Image from 'next/image';
import styles from './styles.module.css';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <>
      <div className={styles.header}>
        <Image
          src="/images/header-logo.svg"
          width={100}
          height={100}
          alt="Quono Logo"
        />
      </div>
    </>
  );
};

export default Header;
