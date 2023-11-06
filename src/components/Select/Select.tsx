import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FilialState } from '../../types/filials';
import styles from './select.module.css';

interface SelectInterface {
  params: FilialState[],
}

export function Select({ params }: SelectInterface) {
  const { setValueChange } = useActions();

  return (
    <select className={styles.select}
      onChange={(e) => {
        const selectedValue = e.target.value;
        // Проверяем, если выбрано значение, отличное от пустой строки
        if (selectedValue !== "") {
          // Скрываем option "Выберите филиал" (index 0) путем установки его атрибута disabled
          e.target.options[0].disabled = true;
          // Смотрим, какой option был выбран, и добавляем атрибут selected для этого option
          const selectedOption = e.target.options[e.target.selectedIndex];
          selectedOption.selected = true;
        }
        setValueChange(parseInt(selectedValue));
      }}
    >
      <option value="">Выберите филиал</option>
      {
        params
          ? params.map((param, index) => (
            <option key={index} value={param.id}>
              {param.name}
            </option>
          ))
          : <option></option>
      }
    </select>
  );
}
