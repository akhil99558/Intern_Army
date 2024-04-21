const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const deadlineInput = document.getElementById('deadlineInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value;
    const category = categorySelect.value;
    const deadline = deadlineInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
        <span>${taskText }</span>
        <span>${category }</span>
        <span class="deadline-label">Deadline:</span>
        <span>${deadline }</span>
        <button class="complete-btn">Complete</button>
    `;
    taskList.appendChild(taskItem);

    taskInput.value = '';
    deadlineInput.value = '';
}

taskList.addEventListener('click', markAsComplete);

function markAsComplete(event) {
    if (event.target.classList.contains('complete-btn')) {
        const taskItem = event.target.closest('.task');
        taskItem.classList.toggle('completed');
    }
}
