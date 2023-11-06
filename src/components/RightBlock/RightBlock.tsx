import { DataDesk } from '../DataDesk';
import styles from './rightblock.module.css';

export function RightBlock() {
  return (
    <div className={styles.rightBlock}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <input type="text" className={styles.input} placeholder='Название меню' />
        </li>
        <li className={styles.listItem}>
          <input type="text" className={styles.input} placeholder='Филиал' />
        </li>
        <li className={styles.listItem}>
          <input type="text" className={styles.input} placeholder='Торговая точка' />
        </li>
        <li className={styles.listItem}>
          <select className={styles.select}>
            <option value="true">Активно</option>
            <option value="true">Не активно</option>
          </select>
        </li>
        <li className={styles.listItem}>
          <a>Экспорт</a>
        </li>
      </ul>

      <DataDesk />
    </div>
  );
}
