import React, {Component} from 'react';
import classNames from 'classnames';

import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
import './TodoItem.css'

class TodoItem extends Component {
    render(){
        const { item, onItemClick } = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg;
        }
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onItemClick} src={url} width={32} height={32} />
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;