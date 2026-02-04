const { addTask, deleteTask, toggleTask } = require('./app');

describe('Task Logic', () => {

    test('addTask should add a new task', () => {
        const initialTasks = [];
        const newTasks = addTask(initialTasks, 'New Task');
        expect(newTasks.length).toBe(1);
        expect(newTasks[0].text).toBe('New Task');
        expect(newTasks[0].completed).toBe(false);
    });

    test('addTask should not add empty task', () => {
        const initialTasks = [];
        const newTasks = addTask(initialTasks, '');
        expect(newTasks.length).toBe(0);
    });

    test('deleteTask should remove task by id', () => {
        const tasks = [{ id: 1, text: 'Task 1' }, { id: 2, text: 'Task 2' }];
        const newTasks = deleteTask(tasks, 1);
        expect(newTasks.length).toBe(1);
        expect(newTasks[0].id).toBe(2);
    });

    test('toggleTask should change completion status', () => {
        const tasks = [{ id: 1, text: 'Task 1', completed: false }];
        const newTasks = toggleTask(tasks, 1);
        expect(newTasks[0].completed).toBe(true);
        // Toggle back
        const finalTasks = toggleTask(newTasks, 1);
        expect(finalTasks[0].completed).toBe(false);
    });
});
