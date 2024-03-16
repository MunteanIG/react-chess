import { useReducer } from 'react';
import './App.css';
import Board from './components/Board/Board';
import AppContext from './contexts/Context';
import { reducer } from './reducer/reducer';
import { initGameState } from './constants';

function App() {
  //Initializing the reducer
  const [appState,dispatch] = useReducer(reducer,initGameState)
  
  const providerState = {
    appState,
    dispatch
  }
  return (
    //Providing a context
      <AppContext.Provider value = {providerState} >
      <div className="App">
        <Board/>
      </div>
    </AppContext.Provider>
  );
}
// Exporting App function to other js files (index.js)
export default App;
