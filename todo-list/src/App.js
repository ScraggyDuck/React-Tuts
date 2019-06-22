import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const todoItems = [
    'Học bài',
    'Đi xem phim',
    'Làm đồ án'
  ];
  return (
    <div className="App">
      {
        todoItems.map((item, index) => <TodoItem title={item} key={index} />)
      }
    </div>
  );
}

export default App;
