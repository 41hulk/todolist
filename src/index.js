import Completed from './modules/complete.js';
import './style.css';

const tList = document.querySelector('.item');
const todo = JSON.parse(localStorage.getItem('todo')) || [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete project',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to the GYM',
    completed: false,
    index: 3,
  },
];

const renderList = () => {
  todo.forEach((item) => {
    const Iscompleted = item.completed ? 'checked' : '';
    const check = item.completed ? 'check' : '';
    tList.innerHTML += `<li class="list-group-item"><input type="checkbox" class="checkbox" ${Iscompleted}>
    <p class="task-desc ${check}">${item.description}</p><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>`;
    return tList;
  });
  Completed.completeTask(todo);
};

renderList();

const clearItem = () => {
  const tList = document.querySelector('.item');
  tList.innerHTML = '';
};

const clearAll = () => {
  const clearSelected = document.querySelector('#clearSelected');
  clearSelected.addEventListener('click', () => {
    const tod = todo.filter((task) => !task.completed);
    clearItem();
    renderList();
    Completed.updateLocalStorage(tod);
  });
};

clearAll();
