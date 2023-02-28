const winnerBtn = document.getElementById('winnerBtn');
const home = document.getElementById('home');

const sorteoDosContainer = document.getElementById('sorteoDosContainer')
const lista = document.getElementById('lista')
const winnerList = document.getElementById('winnerList')

winnerBtn.addEventListener('click', () => {
  sorteoDosContainer.classList.add('active');
  lista.classList.add('active');
  winnerList.classList.remove('active');
})
home.addEventListener('click', () => {
  sorteoDosContainer.classList.remove('active');
  lista.classList.remove('active');
  winnerList.classList.add('active');
})