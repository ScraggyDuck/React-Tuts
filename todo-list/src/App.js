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
        todoItems.length > 0 && todoItems.map((item, index) => <TodoItem item={item} key={index} />)
      }
      {
        todoItems.length === 0 && <div>Chưa có công việc được thêm vào</div>
      }
    </div>
  );
}

export default App;
