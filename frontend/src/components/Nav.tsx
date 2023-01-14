import Link from 'next/link';
import styles from './Nav.module.css';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link className={styles.item} href="/">
            Home
          </Link>
        </li>
        <ul className={styles.nav}>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className={styles.itemButton}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <li>
          <img className={styles.image} src="/images/qunomedical-logo.svg" />
          <img className={styles.image} src="/images/star.svg" />
          <img className={styles.image} src="/images/check.svg" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
