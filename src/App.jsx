import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div align="center" className="App">
      <h1>TODO LIST</h1>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </div>
    </Provider>
  );
}

export default App;
