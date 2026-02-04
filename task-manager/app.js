// État de l'application
let tasks = [];

// Fonction pure : Ajouter une tâche
function addTask(tasksArray, taskText) {
    if (!taskText || taskText.trim() === '') return tasksArray;
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    return [...tasksArray, newTask];
}

// Fonction pure : Supprimer une tâche
function deleteTask(tasksArray, id) {
    return tasksArray.filter(task => task.id !== id);
}

// Fonction pure : Basculer l'état
function toggleTask(tasksArray, id) {
    return tasksArray.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
}

// DOM Manipulation et Events
// Note: enroulé dans une condition pour ne pas casser les tests Node.js
if (typeof document !== 'undefined') {
    const input = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('task-list');
    const countSpan = document.getElementById('task-count');
    const dateDisplay = document.getElementById('date-display');

    // Initialisation
    dateDisplay.textContent = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // eslint-disable-next-line no-inner-declarations
    function render() {
        list.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.innerHTML = `
                <span>${task.text}</span>
                <div class="actions">
                    <button class="btn-complete" onclick="handleToggle(${task.id})">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-delete" onclick="handleDelete(${task.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            list.appendChild(li);
        });
        countSpan.textContent = tasks.filter(t => !t.completed).length;
    }

    addBtn.addEventListener('click', () => {
        const text = input.value;
        if (text) {
            tasks = addTask(tasks, text);
            input.value = '';
            render();
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addBtn.click();
    });

    // Ces fonctions doivent être globales pour l'attribut onclick
    window.handleDelete = (id) => {
        tasks = deleteTask(tasks, id);
        render();
    };

    window.handleToggle = (id) => {
        tasks = toggleTask(tasks, id);
        render();
    };
}

// Exports pour les tests
if (typeof module !== 'undefined') {
    module.exports = { addTask, deleteTask, toggleTask };
}
