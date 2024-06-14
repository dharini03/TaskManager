const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-task-btn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-task-btn')) {
    e.target.parentElement.remove();
  }
});
