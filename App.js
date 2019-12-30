import React from 'react';
import Navigation from './src/routes/navigation';

import store from './src/store/store';
import { Provider } from 'react-redux';
import { init } from './src/utils/fb';

init().then(() => {
  console.log(`Database initialized`)
}).catch((err) => {
  console.log(`Initializing database err`);
  console.log(err)
})

export default function App() {
  return (
    <Provider store={ store }>
      <Navigation />
    </Provider>
  );
}
