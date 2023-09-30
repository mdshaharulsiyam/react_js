import React from 'react';
import { Context} from './Components/Context/Context';
import Rouets from './Rouets';

function App() {
  return (
    <>
      <Context>
        <Rouets></Rouets>
      </Context>
    </>
  );
}

export default App;
