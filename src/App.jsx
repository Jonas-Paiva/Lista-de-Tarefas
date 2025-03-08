import { useState } from "react";
import Tasks from "./Components/Tasks";
import AddTasks from "./Components/AddTasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "Estudar React",
			description: "Para criar Apps",
			isComplete: false,
		},
		{
			id: 2,
			title: "Estudar JASON",
			description: "Para criar Apps",
			isComplete: false,
		},
		{
			id: 3,
			title: "Estudar Inglês",
			description: "Para criar Apps",
			isComplete: false,
		},
	]);

	function onTaskClick(tasksId) {
		const newTasks = tasks.map((task) => {
			if (task.id === tasksId) {
				return { ...task, isComplete: !task.isComplete };
			}else{
				return task;
			}
		});
		setTasks(newTasks);
	}

	function deleteTask(tasksIndex){
		const newTasks = tasks.filter((element)=> element.id != tasksIndex );
		return setTasks(newTasks);
	}

	function onAddTask(newTitle, newDescription){
		const newTask = 	{
			id: tasks.length + 1,
			title: newTitle,
			description: newDescription,
			isComplete: false,
		}
		const newsTasks = [...tasks, newTask];
		setTasks(newsTasks);
	}

	return (
		<div>
			<h1>Gerenciar Tarefas</h1>
			<AddTasks onAddTask = {onAddTask}/>
			<Tasks tasks={tasks} id="Tasks" onTaskClick={onTaskClick} deleteTask = {deleteTask}/>
		</div>
	);
}

export default App;
