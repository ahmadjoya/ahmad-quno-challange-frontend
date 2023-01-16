import SortButton from '../common/sortButton';
import styles from './styles.module.css';
import type { FC } from 'react';
const SORT_BY_OPTIONS = [
  { id: 1, title: 'Best Qunoscore' },
  { id: 2, title: 'Best reviews' },
  { id: 3, title: 'Lowest price' },
  { id: 4, title: 'Default' },
];
const Sort: FC<{ sortBy: (field: string) => void; selectedTab: string }> = ({
  sortBy,
  selectedTab,
}) => {
  return (
    <>
      <div className={styles.sort}>
        {SORT_BY_OPTIONS.map((item) => (
          <SortButton
            key={item.id}
            title={item.title}
            sortBy={sortBy}
            selectedTab={selectedTab}
          />
        ))}
      </div>
    </>
  );
};

export default Sort;
