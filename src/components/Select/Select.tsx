import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FilialState } from '../../types/filials';
import styles from './select.module.css';

interface SelectInterface {
  params: FilialState[],
}

export function Select({ params }: SelectInterface) {
  const { fetchFilialsData } = useActions();

  return (
    <select className={styles.select}
      onChange={(e) => {
        fetchFilialsData(e.target.value);
      }
      }
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
    </select >
  );
}
