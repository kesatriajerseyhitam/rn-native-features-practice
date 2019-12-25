import React from 'react';
import Navigation from './src/routes/navigation';

import store from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={ store }>
      <Navigation />
    </Provider>
  );
}
