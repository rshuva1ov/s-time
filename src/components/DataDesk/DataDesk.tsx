import React, { useEffect } from 'react';
import styles from './datadesk.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export function DataDesk() {
  const { menu } = useTypedSelector(state => state.menu)
  const { loading, error, filialsData } = useTypedSelector(state => state.filialsData);

  if (!menu) {
    return <div></div>;
  }

  if (loading) {
    return <h1>Идет загрузка....</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {`${filialsData}`}
    </div>
  );
}
