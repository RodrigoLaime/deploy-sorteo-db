
async function getSorteo() {
  const response = await fetch("/api/winner");
  const data = await response.json();
  console.log(data);


  data.data.forEach(user => {
    const usuario = `<li>name: ${user.name}</li>`;

    const winnerUl = document.getElementById('winnerUl');
    if (user.lengt === 0) {
      winnerUl.innerHTML = 'No hay ganadores para mostrar'
    } else {
      winnerUl.insertAdjacentHTML('beforeend', usuario)
    }
  });

}

getSorteo()
