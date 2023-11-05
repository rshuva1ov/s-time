import React from 'react';
import styles from './rightblock.module.css';
import { Select } from '../Select';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DataDesk } from '../DataDesk';

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
          <select className={styles.input}>
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
