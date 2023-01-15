import styles from './styles.module.css';
import type { FC } from 'react';

const SortButton: FC<{
  title: string;
  sortBy: (field: string) => void;
  selectedTab: string;
}> = ({ title, sortBy, selectedTab }) => {
  return (
    <button
      className={styles.sortButton}
      onClick={() => sortBy(title)}
      style={
        title === selectedTab
          ? { background: '#ffca58' }
          : { background: '#fff', border: '1px solid #CACACA' }
      }
    >
      {title}
    </button>
  );
};

export default SortButton;
