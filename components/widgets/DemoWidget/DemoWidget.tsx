import { JSX } from '@babel/types';
import React, { useEffect, useState } from 'react';
import { getPersistedData, persistData } from './DemoWidget-api-local';

const DemoWidget = (): JSX.Element => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const persistedValue = getPersistedData();
    if (!persistedValue) {
      return;
    }

    setValue(persistedValue);
  }, []);

  const onValueChange = (event) => {
    const value = event.target.value;
    setValue(value);
    persistData(value);
  };

  const getYearlySavings = (savePerMonth): number => {
    const savePerMonthNumber = parseInt(savePerMonth);

    if (isNaN(savePerMonthNumber)) {
      return 0;
    }

    return +savePerMonth * 12;
  };

  return (
    <>
      <input
        type="number"
        className="savings-input mb-2"
        placeholder="Сколько остается с зарплаты?"
        value={value}
        onChange={onValueChange}
      />
      <div>Накопишь за год: {getYearlySavings(value)}</div>
      <style jsx>{`
        .savings-input {
          outline: 2px solid slategray;
          padding: 5px 10px;
          width: 300px;
        }
      `}</style>
    </>
  );
};

export default DemoWidget;
