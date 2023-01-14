import styles from './styles.module.css';
import type { FC } from 'react';

const FilterButton: FC<{ title: string }> = ({ title }) => {
  return <button className={styles.filterButton}>{title}</button>;
};

export default FilterButton;
