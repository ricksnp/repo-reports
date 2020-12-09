import React from 'react';
import InputElement from './components/input/input/input'
import MainView from './views/MainView'
import { Provider } from 'react-redux';
import { store } from './Store'
function App() {
  return (
    <>
      <Provider store={store} >
        <InputElement></InputElement>
        <MainView />
      </Provider>
    </>
  );
}

export default App;
