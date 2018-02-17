import React from 'react';

const Title = props => <div>
							<h1>{props.title}</h1>
							<p>{props.tasks} {props.tasksNr}</p>
						</div>

export default Title;