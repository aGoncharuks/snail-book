import { JSX } from '@babel/types';
import { useState } from 'react';

const DemoWidget = (): JSX.Element => {
  const [value, setValue] = useState('10');

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  return <input value={value} onChange={onValueChange} />;
};

export default DemoWidget;
