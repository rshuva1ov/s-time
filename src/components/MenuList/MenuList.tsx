import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Select } from '../Select';
import styles from './menulist.module.css';

export function MenuList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { loading, error, filials } = useTypedSelector(state => state.filials);
  const { fetchFilials } = useActions();
  const { setMenu } = useActions();
  const { setMenuChange } = useActions();

  useEffect(() => {
    fetchFilials();
    setMenu();
  }, [])


  const listData = [
    "- Компоненты",
    "- Полуфабрикаты",
    "- Товары",
    "- Меню",
    "- Перемещения",
    "- Инвентаризация",
    "- Выпуск товара",
    "- Списание",
    "- Накладные",
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (index === 3) {
      setMenuChange(true);
    } else {
      setMenuChange(false);
    }
  };

  if (loading) {
    return <h1>Идет загрузка....</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <Scrollbar style={{ height: 650 }}>
      <div style={{ height: 1150 }}>
        <div className={styles.selectBlock}>
          <Select params={filials}></Select>
        </div>

        <ul className={styles.menuList}>
          {listData.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? styles.active : ""}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Scrollbar >
  );
}
