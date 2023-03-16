
async function getSorteo() {
  const response = await fetch("/api/winner");
  const data = await response.json();
  console.log(data);
  let num = 0;
  //ordena de mayor a menor
  let orden = data.data.sort((a, b) => b.amount - a.amount);
  console.log(orden);
  //optine el top 10
  let topTen = orden.slice(0, 10);
  console.log(topTen);
  /*   data.data.forEach(user => { */
  topTen.forEach(user => {
    num += 1
    const winnerUl = document.getElementById('winnerUl');
    if (user.lengt === 0) {
      winnerUl.innerHTML = 'No hay ganadores para mostrar'
    } else {
      mostrarWinner(user, num)
    }
  });

}
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


getSorteo()
