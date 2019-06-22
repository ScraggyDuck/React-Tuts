import React,  {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems: [
        { title: 'Học bài', isComplete: true},
        { title: 'Đi xem phim', isComplete: false},
        { title: 'Làm đồ án', isComplete: false}
      ]
    };
  }

  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {...item, isComplete: !isComplete},
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  render(){
    return (
      <div className="App">
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
            <TodoItem item={item} key={index} onItemClick={this.onItemClick(item)}/>)
        }
        {
          this.state.todoItems.length === 0 && <div>Chưa có công việc được thêm vào</div>
        }
      </div>
    );
  }
}

export default App;
