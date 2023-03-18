const d = document;
d.addEventListener("DOMContentLoaded", () => {
  sorteoDos('sorteo-dos', 'agregar-jugador', 'ganador-btn-dos', 'lista-jugadores');
});

function sorteoDos(input, agregar, ganador, jugadores) { //agregamos 
  const ingresarText = d.getElementById('ingresarText');
  let $input = document.getElementById(input), //$ indica que estas trabajando en una etiqueta HTML
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);
  let jugadoresArray = [];

  /* funcion agregar jugador */
  const agregarJugadores = () => {
    let inputValue = $input.value;

    jugadoresArray.forEach(e => {
      if (!!inputValue && inputValue === e) {
        inputValue = '';
        $input.value = '';
      }
    })
    
    if (inputValue === '' || inputValue.length === 0) {
      $input.style = 'border: 2px solid red'
      ingresarText.style = 'color: red'
      setTimeout(() => {
        $input.style = 'border: 2px solid #05EB87'
        ingresarText.style = 'color: #03AB62'
      }, 2500);
    } else if (inputValue || inputValue.length > 0) {
      jugadoresArray.push(inputValue);
      $jugadores.insertAdjacentHTML("beforeend", ` <li>${inputValue}</li> `);
      $input.value = '';
    }

    /* if (inputValue === '' || inputValue.length === 0) {
      $input.style = 'border: 2px solid red'
      setTimeout(() => {
        $input.style = 'border: 2px solid #05EB87'
      }, 3000);
    } else {
      jugadoresArray.forEach(e => {
        if (inputValue === e) {
          inputValue = '';
        }
      })
      if (inputValue === '' || inputValue.length === 0) {
        alert('nooooo')
      } else if (inputValue || inputValue.length > 0) {
        jugadoresArray.push(inputValue);
        $jugadores.insertAdjacentHTML("beforeend", ` <li>${inputValue}</li> `);
        $input.value = '';
      }

    } */

  };

  /* funcion Mostrae ganador */
  const ganadorSorteo = () => {
    $input.focus();

    const random = Math.floor(Math.random() * jugadoresArray.length)
    const jugadorGanador = jugadoresArray[random];
    jugadoresArray = [];

    const UserGandor = jugadorGanador;

    // $$$$$$$$$$$$$$$$$$$$$$$$$

    //funcion Contador
    const contador = d.getElementById('contador')
    const num = d.getElementById('numero');
    let numero = 3;
    const timer = setInterval(() => {
      if (!!UserGandor && !!numero) {
        contador.classList.remove('active');
        console.log(numero);
        num.innerHTML = `((( 0${numero} )))`;
        numero--;
      } else if (!!UserGandor && numero == 0) {
        contador.classList.add('active');
        clearInterval(timer);
        addProduct(UserGandor)
      }
    }, 1000);

    //
    const addProduct = async (Gandor) => {
      const response = await fetch("/api/winner");
      const data = await response.json();
      const dato = data.data;

      let result = dato.find((element) => element.name === Gandor);

      //modal 

      const modal = d.getElementById('modal');
      const winner = d.getElementById('winner');
      function modalFunction() {

        if (Gandor) {
          if (Gandor && dato.includes(result)) {
            /*  alert('Ya existe el usuario') */
            winner.innerHTML = `El ganador fue: ${jugadorGanador} `
            modal.classList.remove('active');
            let idDb = result._id
            /* console.log(idDb) */
            let amountDb = result.amount;
            /* console.log(amountDb); */

            let amountSum = amountDb + 1;
            updateData(idDb, Gandor, amountSum);

          } else if (!result) {
            let amount = 1;
            winner.innerHTML = `El ganador fue: ${jugadorGanador} `
            modal.classList.remove('active');
            postData(Gandor, amount);
            setTimeout(() => {
              modal.classList.add('active');
            }, 4000);
            console.log(jugadoresArray);
          }
        } else {
          console.log('No hay ganador')
        }
      }

      modalFunction()

    };

    setTimeout(() => {
      $jugadores.innerHTML = "";
    }, 4000);

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
    if (jugadoresArray.length <= 1) {
      $input.style = 'border: 2px solid red'
      ingresarText.style = 'color: red'
      setTimeout(() => {
        $input.style = 'border: 2px solid #05EB87'
        ingresarText.style = 'color: #03AB62'
      }, 2500);
      /*  alert('No has ingresado participantes'); */
    } else {
      ganadorSorteo();
    }
  });
};

/* ########################################## */
const apiPatch = 'https://deploy-sorteo-db-production-d3f8.up.railway.app/api/update/'
/* const apiPatch = 'http://localhost:3000/api/update/' */
async function updateData(id, nombre, amount) {
  const response = await fetch(apiPatch + id, {
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

/* ########################################## */

//funcion para agregar a la base de datos
const api = 'https://deploy-sorteo-db-production-d3f8.up.railway.app/api/sorteo'
/* const api = 'http://localhost:3000/api/sorteo' */
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
