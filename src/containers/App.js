import React from 'react';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js'

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
				}]
		};
		this.removeItem = this.removeItem.bind(this);
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeItem(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title title='To Do Application'
				tasks='Number of tasks: '
				tasksNr={this.state.data.length}
				/>
				<TodoList list={this.state.data}
				remove={this.removeItem.bind(this)}
				/>
			</div>
		);
	}
}


export default App;