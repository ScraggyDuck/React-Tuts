import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const todoItems = [
    { title: 'Học bài', isComplete: true},
    { title: 'Đi xem phim', isComplete: true},
    { title: 'Làm đồ án', isComplete: false}
  ];
  return (
    <div className="App">
      {
        todoItems.map((item, index) => <TodoItem item={item} key={index} />)
      }
    </div>
  );
}

export default App;
