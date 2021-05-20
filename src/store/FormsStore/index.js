import React from 'react';

import FormsStore from './FormsStore';

const forms = new FormsStore();
const FormsStoreContext = React.createContext(forms);

export { forms, FormsStoreContext };
