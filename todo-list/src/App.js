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

  onItemClick(index) {
    this.setState({
       todoItems: this.changedItems(index)
    });
  }

  changedItems(index){
    let length = this.state.todoItems.length;
    let todoItems = this.state.todoItems;
    for(let i = 0; i < length; i++)
      if(i === index)
        todoItems[i].isComplete = !todoItems[i].isComplete;
    return todoItems;
  }

  render(){
    return (
      <div className="App">
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
            <TodoItem item={item} key={index} onItemClick={() => this.onItemClick(index)}/>)
        }
        {
          this.state.todoItems.length === 0 && <div>Chưa có công việc được thêm vào</div>
        }
      </div>
    );
  }
}

export default App;
