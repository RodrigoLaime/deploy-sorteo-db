
async function getSorteo() {
  const response = await fetch("/api/winner");
  const data = await response.json();
  console.log(data);
  let num = 0;
  data.data.forEach(user => {
    num += 1
    /*     const usuario = `<li>name: ${user.name}</li>`; */
    const winnerUl = document.getElementById('winnerUl');
    if (user.lengt === 0) {
      winnerUl.innerHTML = 'No hay ganadores para mostrar'
    } else {
      /*    winnerUl.insertAdjacentHTML('beforeend', usuario) */
      mostrarWinner(user, num)
    }
  });

}
/*   const table = document.getElementById('table'); */
/*   const head = document.getElementById('thead'); */
/*   head.insertAdjacentHTML('afterend', body) */
const mostrarWinner = (user, numero) => {
  const body = document.getElementById('tbody');
  //crear element
  /*   const tr1 = body.insertRow('tr'); */
  const tr1 = document.createElement('tr');
  const td1 = tr1.insertCell('td');
  const td2 = tr1.insertCell('td');
  const td3 = tr1.insertCell('td');
  td1.innerText = `${user.amount}`
  td2.innerText = `${user.name}`
  td3.innerText = numero
  body.appendChild(tr1);
}
/* mostrarWinner(); */


getSorteo()
