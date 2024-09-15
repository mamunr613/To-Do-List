document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      taskList.appendChild(li);
      taskInput.value = '';
  
      // Attach event to delete button
      li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
      });
    }
  
    addTaskButton.addEventListener('click', addTask);
  
    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  