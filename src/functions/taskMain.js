// Task information that I will need:
// 1. Task Name
// 2. Task Description
// 3. Task Date
// 4. Task status (completed, on course, pending)
// 5. Task importance level (low, medium, high)
// 6. Task project group
// 7. Maybe task comments or something of that sort

class Task {
	constructor(username) {
		this.userName = username;
		this.taskArray = [];
	}

	addTask(name, description, date, status, importance, project, comments) {
		let newTask = {
			name: name,
			description: description,
			date: date,
			status: status,
			importance: importance,
			project: project,
			comments: comments,
		};

		this.taskArray.push(newTask);
		logger("The task was added!");
	}

	taskList() {
		logger(this.taskArray);
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

const logger = (message) => {
	console.log(message);
};

const user = new Task("Kagune");
user.addTask(
	"Task 1",
	"Something desc",
	"today",
	"uncomplete",
	"high",
	"webdev",
	"I have to do this now!"
);
user.addTask(
	"Task 2",
	"Something desc",
	"today",
	"uncomplete",
	"high",
	"webdev",
	"I have to do this now!"
);
user.addTask(
	"Task 3",
	"Something desc",
	"today",
	"uncomplete",
	"high",
	"webdev",
	"I have to do this now!"
);
user.searchTask("Task 1");
