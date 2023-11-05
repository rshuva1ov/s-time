import { CompanyBoard } from '../CompanyBoard';
import { MenuList } from '../MenuList';
import styles from './leftblock.module.css';

export function LeftBlock() {
  return (
    <div className={styles.leftBlock}>
      <CompanyBoard />
      <MenuList />
    </div>
  );
}
