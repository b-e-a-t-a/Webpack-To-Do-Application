import React from 'react';
import style from './Title.css';

const Title = props => <div className={style.title}>
							<h1>{props.title}</h1>
							<p>{props.tasks} {props.tasksNr}</p>
						</div>

export default Title;