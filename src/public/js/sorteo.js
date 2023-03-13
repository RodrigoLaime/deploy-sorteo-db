const d = document;
const values = window.location.search;
const urlParams = new URLSearchParams(values);

d.addEventListener("DOMContentLoaded", () => {
  sorteoDos('sorteo-dos', 'agregar-jugador', 'ganador-btn-dos', 'lista-jugadores');
});


function sorteoDos(input, agregar, ganador, jugadores) { //agregamos 
  const $input = document.getElementById(input), //$ indica que estas trabajando en una etiqueta HTML
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);
  let jugadoresArray = [];

  /* funcion agregar jugador */
  const agregarJugadores = () => {
    const inputValue = $input.value;

    if (inputValue === '' || inputValue.length === 0) {
      alert('No has ingresado participante');
    } else {
      jugadoresArray.push(inputValue);
      $jugadores.insertAdjacentHTML("beforeend", ` <li>${inputValue}</li> `);
      $input.value = '';
    }

  };

  /* funcion Mostrae ganador */
  const ganadorSorteo = () => {
    $input.focus();

    const random = Math.floor(Math.random() * jugadoresArray.length)
    const jugadorGanador = jugadoresArray[random];
    jugadoresArray = [];


    // agregar numero de veces
    let amount = [];

    setTimeout(() => {
      $jugadores.innerHTML = "";
    }, 4000);

    const UserGandor = jugadorGanador;
    //modal 
    const modal = d.getElementById('modal');
    const winner = d.getElementById('winner');
    function modalFunction() {
      if (UserGandor) {
        //aqui iria la funcion de actualizar tambien 
        postData(UserGandor, amount);
        winner.innerHTML = `El ganador fue: ${jugadorGanador} `
        modal.classList.remove('active');
        setTimeout(() => {
          modal.classList.add('active');
        }, 4000);
      }
    }

    /* modal indica que ya existia */


    //Contador
    const contador = d.getElementById('contador')
    const num = d.getElementById('numero');
    let numero = 3;
    const timer = setInterval(() => {
      if (!!UserGandor && !!numero) {
        contador.classList.remove('active');
        console.log(numero);
        num.innerHTML = `0${numero}`;
        numero--;
      } else if (!!UserGandor && numero == 0) {
        contador.classList.add('active');
        clearInterval(timer);
        modalFunction(UserGandor);
      }
    }, 1000);

    //

    /* let id = urlParams.get('id');
    let nameParams = urlParams.get('name');
    let amountParams = urlParams.get('amount');
    function cargarAmount(userWinner) {
      if (nameParams != userWinner) {
        console.log('No es el mismo usuario')
        postData(jugadorGanador, amount);
      } else if (nameParams === userWinner) {
        amountParams++
        updateData(id, nameParams, amountParams)
      }
    }
    cargarAmount(jugadorGanador); */

  };


  //boton enter
  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      agregarJugadores()
    }
  })
  // boton agregar jugador
  $agregar.addEventListener('click', () => {
    agregarJugadores()
  });


  // boton mostrar ganador
  $ganador.addEventListener('click', () => {
    if (jugadoresArray.length === 0) {
      alert('No has ingresado participantes');
    } else {
      ganadorSorteo();
    }
  });
};

/* ########################################## */

/* async function updateData(id, nombre, amount) {
  const response = await fetch('http://localhost:3000/api/update' + id, {
    method: 'PATCH',
    headers: {
      'Accept': 'aplication/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': nombre,
      'amount': amount
    })
  });
  const data = await response.json();
  console.log(data)
}
 */

/* ########################################## */

//funcion para agregar a la base de datos
const api = 'http://localhost:3000/api/sorteo'
/* const api = 'https://deploy-sorteo-db-production-d3f8.up.railway.app/api/sorteo' */
async function postData(name, repeat) {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': name,
      'amount': repeat
    })
  });
  const data = await response.json();
  console.log(data);
}
