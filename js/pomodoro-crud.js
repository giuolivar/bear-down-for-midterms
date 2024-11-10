document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const goalForm = document.getElementById('goalForm');
    const goalInput = document.getElementById('goalInput');
    const goalList = document.getElementById('goalList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText, taskList);
            taskInput.value = '';
        }
    });

    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const goalText = goalInput.value.trim();
        if (goalText) {
            addTask(goalText, goalList);
            goalInput.value = '';
        }
    });

    function addTask(taskText, list) {
        const li = document.createElement('li');
        const timestamp = new Date().toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });

        li.innerHTML = `
            <span>${taskText}</span>
            <span class="taskTimestamp">${timestamp}</span>
            <i class="fa-solid fa-trash fa-xxs" style="color: #a07178;"></i>
        `;
        li.addEventListener('click', (e) => {
            if (e.target.classList.contains('removeBtn')) {
                li.remove();
            } else {
                li.classList.toggle('completed');
            }
        });
        list.appendChild(li);
    }

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI' && !e.target.classList.contains('removeBtn')) {
            e.target.classList.remove
        }
    });
});