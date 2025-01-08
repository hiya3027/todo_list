function addTask() {
    const taskEntered = document.getElementById('taskEntered');
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskEntered.value}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskEntered.value = '';
}

function deleteTask(button) {
    button.parentElement.remove(); 
}

function editTask(button) {
    const li = button.parentElement;
    if (button.textContent === 'Edit') {
        const input = document.createElement('input');
        input.value = li.querySelector('span').textContent;
        li.replaceChild(input, li.querySelector('span'));
        button.textContent = 'Save';
    } else {
        const span = document.createElement('span');
        span.textContent = li.querySelector('input').value;
        li.replaceChild(span, li.querySelector('input'));
        button.textContent = 'Edit';
    }
}