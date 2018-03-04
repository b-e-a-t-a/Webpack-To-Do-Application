import React from 'react';
import style from './App.css';
import uuid from "uuid";
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

//import Todo from '../components/Todo.js';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [{
				id: 1,
					text: 'clean room'
				}, {
				id: 2,
					text: 'wash the dishes'
				}, {
				id: 3,
					text: 'feed my cat'		
				}],
			value: ''
		};
		this.removeTodo = this.removeTodo.bind(this);
	}
	addTodo(val){
		const todo = {
			text: this.state.value,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data, value:''});
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title 
					title='To Do Application'
					tasks='Number of tasks: '
					tasksNr={this.state.data.length}
				/>
				<TodoList 
					list={this.state.data}
					remove={this.removeTodo.bind(this)}
				/>
				<TodoForm
					value={this.state.value}
					addTodo={this.addTodo.bind(this)}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);
	}
}


export default App;