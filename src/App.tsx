import React from 'react';


import Todos from "./components/Todos";

import NewTodo from "./components/NewTodo";
import TodosContexProvider from "./store/todos-context";



function App() {


  return (
    <TodosContexProvider>
        <NewTodo/>
      <Todos  />

    </TodosContexProvider>
  );
}

export default App;
