import FILTERS from '@/shared/variables/filters';
import styles from '@/styles/category/Category.module.css';
import { useState } from 'react';

type Props = {
  activeFilter: string;
  handleFilter: (value: string) => void;
};

const Filter = ({ activeFilter, handleFilter }: Props) => {
  const [isFilter, setIsFilter] = useState(false);

  return (
    <section className={`${styles.filter} flex_column`}>
      <ins className='grey' onClick={() => setIsFilter((prev) => !prev)}>
        Filtra e ordina
      </ins>
      {isFilter && (
        <div className='flex' style={{ gap: '30px' }}>
          {Object.entries(FILTERS).map(([key, value]) => (
            <p key={key} className={value === activeFilter ? '' : 'grey'} onClick={() => handleFilter(value)}>
              {value}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default Filter;
