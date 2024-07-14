const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


let tasks = [];

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                tasks.push(taskText);
                displayTasks();
                taskInput.value = '';
            }
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            displayTasks();
        }

        function displayTasks() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;
                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete';
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteTask(index);
                li.appendChild(deleteButton);
                taskList.appendChild(li);
            });
        }