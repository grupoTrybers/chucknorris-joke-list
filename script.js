const p = document.querySelector('.text');
const ol = document.querySelector('.ol');
const btnPiada = document.querySelector('.btn');
const btnAdd = document.querySelector('.add');
const btnSave = document.querySelector('.save');
const btnDelete = document.querySelector('.delete');
const select = document.querySelector('#category');


btnPiada.addEventListener('click', async () => {
  const category = select.value;
  p.innerText = 'Loading...'
  const api = await apiSearch(category)
  p.innerText = api.value
})

const bgcolor = (event) => {
  event.target.classList.toggle('selectli')
}

const selectLi = () => {
  ol.childNodes.forEach((element) => {
    element.addEventListener('click', bgcolor)
  })
}

btnAdd.addEventListener('click', () =>{
  if (p.innerText !== '' && p.innerText !== 'Loading...') {
    const li = document.createElement('li');
    li.className = 'lis';
    li.innerText = p.innerText;
    ol.appendChild(li);
    selectLi()
  }
})

btnDelete.addEventListener('click', () => {
  const selectLi = document.querySelectorAll('.selectli');
  selectLi.forEach((li) => {
    li.remove();
  })
})

btnSave.addEventListener('click', () => {
  if (ol.innerText !== '') {
    localStorage.setItem('joke', ol.innerHTML);
  }
})

const restoreList = () => {
  if (localStorage.getItem('joke')) {
    console.log('teste');    ol.innerHTML = localStorage.getItem('joke');
    selectLi()
  }
}

restoreList()