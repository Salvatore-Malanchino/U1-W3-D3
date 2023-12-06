const pageForm = document.getElementById('main-form');
const deleteText = (e) => {
  e.target.remove('p');
};

pageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.getElementById('main-txt');
  console.log(text.value);

  const table = document.createElement('div');
  table.innerHTML = `
    <h3>${text.value}</h3>
    `;
  console.log(table);

  const sezioneT = document.getElementById('casuale');
  table.addEventListener('click', (e) => {
    {
      table.classList.toggle('linea');
    }
  });
  const button = document.createElement('button');
  button.addEventListener('click', deleteText);
  button.innerText = 'Delete';
  sezioneT.appendChild(table);
  sezioneT.appendChild(button);
  text.value = '';
});
