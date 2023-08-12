import styles from '@/styles/category/Category.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  pageState: {
    pages: number[];
    actualPage: number;
    setActualPage: Dispatch<SetStateAction<number>>;
  };
};

const PaginationButtons = ({ pageState }: Props) => {
  const { pages, actualPage, setActualPage } = pageState;
  return (
    <nav className={`${styles.pagination} flex`}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setActualPage(page)}
          className={actualPage === page ? styles.selected : ''}>
          {page}
        </button>
      ))}
    </nav>
  );
};

export default PaginationButtons;
