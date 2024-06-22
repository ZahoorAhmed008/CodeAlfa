// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => taskList.removeChild(li);

        li.appendChild(deleteBtn);
        li.onclick = () => li.classList.toggle('complete');
        taskList.appendChild(li);
        newTaskInput.value = '';
    };

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on Enter key press
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
