import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as actions from './redux';
import Layout from './components/Layout';

const Counter = React.lazy(() => import('mf1/Counter'));
const Wrapper = React.lazy(() => import('mf2/Wrapper'));

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        Container
        <Layout />
        <React.Suspense fallback='Loading Button'>
          <Counter actions={actions} />
          <Wrapper />
        </React.Suspense>
      </div>
    </Provider>
  );
}

export default App;
