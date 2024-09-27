document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="completeBtn">Complete</button>
                <button class="deleteBtn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
        taskInput.focus();
    }

    // Delete task
    function deleteTask(e) {
        if (e.target.classList.contains('deleteBtn')) {
            const taskItem = e.target.closest('li');
            taskList.removeChild(taskItem);
        }
    }

    // Complete task
    function completeTask(e) {
        if (e.target.classList.contains('completeBtn')) {
            const taskItem = e.target.closest('li');
            taskItem.classList.toggle('completed');
        }
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);
    taskList.addEventListener('click', completeTask);

    // Add task by pressing 'Enter'
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
