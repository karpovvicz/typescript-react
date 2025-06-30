import React from 'react';
import Todos from "./components/Todos";



function App() {
  return (
    <div>
      <Todos items={['learn this', 'learn that']} />

    </div>
  );
}

export default App;
