import FilterButton from '../common/filterButton';
import styles from './styles.module.css';
import type { FC } from 'react';
const FILTERS = [
  { id: 1, title: 'Best Qunoscore' },
  { id: 2, title: 'Best reviews' },
  { id: 3, title: 'Lowest price' },
  { id: 4, title: 'Just to get scroll' },
];
const Filter: FC = () => {
  return (
    <>
      <div className={styles.filter}>
        {FILTERS.map((item) => (
          <FilterButton key={item.id} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default Filter;
