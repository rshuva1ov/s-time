import styles from './datadesk.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
//@ts-ignore
import { ReactComponent as MySvg3 } from '../../utils/3.svg';
//@ts-ignore
import { ReactComponent as MySvg4 } from '../../utils/4.svg';
//@ts-ignore
import { ReactComponent as MySvg5 } from '../../utils/5.svg';
import { Pagination } from '../Pagination';
import { useEffect, useState } from 'react';
import { fetchFilialsData } from '../../store/action-creator/filials';
import { useActions } from '../../hooks/useActions';

export function DataDesk() {
  const { fetchFilialsData } = useActions();
  const { menu } = useTypedSelector(state => state.menu);
  const { value } = useTypedSelector(state => state.value);
  const { loading, error, filialsData } = useTypedSelector(state => state.filialsData);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesArray: number[] = [];
  const limit = 10;

  useEffect(() => {
    fetchFilialsData(value, currentPage);
  }, [value, currentPage])

  if (!menu || !value) {
    return <div></div>;
  }

  if (loading) {
    return <h1>Идет загрузка....</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = filialsData.max_pages;

  return (
    <div className={styles.dataDesk}>
      <ul className={styles.menuList}>
        {filialsData.data.map((filial) => (
          <li key={filial.id} className={styles.grid}>
            <div className={styles.item}>
              {filial.name}
            </div>
            <div className={styles.item}>
              {filial.filial.name}
            </div>
            <div className={styles.item}>
              {filial.tt.name}
            </div>
            <div className={styles.item}>
              {filial.active
                ? 'Активно'
                : 'Не активно'
              }
            </div>
            <div className={styles.item}>
              {filial.export.map((exp) => (
                <p key={exp} className={styles.export}>{exp}</p>
              ))}
            </div>
            <div className={styles.lastItem}>
              <MySvg3 className={styles.svg} />
              <MySvg4 className={styles.svg} />
              <MySvg5 className={styles.svg} />
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        pagesArray={pagesArray}
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={handlePageChange}
      />
    </div>
  );
}
