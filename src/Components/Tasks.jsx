import PropTypes from "prop-types";

function Tasks(props) {
	return (
		<ul id="boxTasks">
			{props.tasks.map((element) => (
				<li key={element.id}>
					<button 
						onClick={() => props.onTaskClick(element.id)}
						className={element.isComplete && 'line'}
						>
						{element.title}
					</button>
					<div id="boxButton">
						<button type="button" onClick={()=>props.deleteTask(element.id)}>x</button>
						<button type="button">&gt;</button>
					</div>
				</li>
			))}
		</ul>
	);
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired,
	onTaskClick: PropTypes.object.isRequired,
	deleteTask: PropTypes.object.isRequired,
};

export default Tasks;
