import React from 'react';
import style from './TodoList.css';

const TodoList = props => <ul className={style.TodoList}>{props.list.map(data => <li key={data.id}> {data.text} </li>)} 

						</ul>

//onClick = {() => this.props.removeTodo(todo.id)}

export default TodoList;