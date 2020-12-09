import React from 'react';
import InputElement from './components/input/input/input'
import GitTable from './components/table/table'
import { Provider } from 'react-redux';
import { store } from './Store'
function App() {
  return (
    <>
      <Provider store={store} >
        <InputElement></InputElement>
        <GitTable />
      </Provider>
    </>
  );
}

export default App;
