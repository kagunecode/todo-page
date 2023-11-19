// Task information that I will need:
// 1. Task Name
// 2. Task Description
// 3. Task Date
// 4. Task status (completed, on course, pending)
// 5. Task importance level (low, medium, high)
// 6. Task project group
// 7. Maybe task comments or something of that sort

import logger from "../functions/logger";

class Task {
	addTask(
		user,
		name,
		description,
		date,
		status,
		importance,
		project,
		comments
	) {
		let newTask = {
			name: name,
			description: description,
			date: date,
			status: status,
			importance: importance,
			project: project,
			comments: comments,
		};

		user.push(newTask);
		logger("The task was added!");
	}

	taskList(user) {
		logger(user);
	}

	searchTask(taskName) {
		for (let items in this.taskArray) {
			if (this.taskArray[items].name == taskName) {
				logger(this.taskArray[items]);
				return true;
			}
		}
		logger("No task with that name was found");
		return false;
	}
}
