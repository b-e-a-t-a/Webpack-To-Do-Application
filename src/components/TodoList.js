import React from 'react';
import style from './TodoList.css';

const Todo = ({ item, removeItem }) => {
	return <li onClick = {() => removeItem(item.id)}> {item.text} </li>;
};

const TodoList = ({ list, remove }) => {
  const todoList = list.map(data => {
    return <Todo item={data} removeItem={remove} key={data.id} />;
  });

  return <ul className={style.TodoList}> {todoList} </ul>;
};

export default TodoList;

// const TodoList = props => <ul className={style.TodoList}> {props.list.map(data => <li key={data.id}> {data.text} </li>)} </ul>
//onClick = {() => this.props.removeTodo(todo.id)}