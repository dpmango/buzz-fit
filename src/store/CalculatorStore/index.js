import React from 'react';

import CalculatorStore from './CalculatorStore';

const calculator = new CalculatorStore();
const CalculatorStoreContext = React.createContext(calculator);

export { calculator, CalculatorStoreContext };
