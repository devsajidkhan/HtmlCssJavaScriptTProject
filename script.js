const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (text !== '') {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerText = text;
    button.innerText = 'Delete';

    button.addEventListener('click', () => {
      item.remove();
    });

    item.appendChild(span);
    item.appendChild(button);

    list.appendChild(item);

    input.value = '';
  }
});
