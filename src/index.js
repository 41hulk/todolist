import './style.css';

const tList = document.querySelector('.item');
const todo = [
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
  for (let i = 0; i < todo.length; i += 1) {
    tList.innerHTML += `<li class="list-group-item"><input type="checkbox"><p>${todo[i].description}</p><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>`;
  }
  return tList;
};

renderList();