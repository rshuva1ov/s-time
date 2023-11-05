import styles from './companyboard.module.css';
//@ts-ignore
import { ReactComponent as MySvg1 } from '../../utils/1.svg';
//@ts-ignore
import { ReactComponent as MySvg2 } from '../../utils/2.svg';

export function CompanyBoard() {
  return (
    <div className={styles.companyData}>
      <div className={styles.companyItem}>
        <MySvg1 />
        <div className={styles.companyItemText}>
          <span className={styles.companyItemLabel}>НАЗВАНИЕ ФИРМЫ</span>
          <span className={styles.companyItemName}>Лоскутникова В.П.</span>
        </div>
      </div>

      <div className={styles.companyItem}>
        <MySvg2 />
        <div className={styles.companyItemText}>
          <span className={styles.companyItemLabel}>НАЗВАНИЕ ФИРМЫ</span>
        </div>
      </div>
    </div>
  );
}
