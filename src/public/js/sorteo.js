import { postData, updateData } from "./metod.js";

const d = document;
d.addEventListener("DOMContentLoaded", () => {
  sorteoDos('sorteo-dos', 'agregar-jugador', 'ganador-btn-dos', 'lista-jugadores');
});

function sorteoDos(input, agregar, ganador, jugadores) {
  //agregamos
  let ingresarText = d.getElementById('ingresarText');

  let $input = document.getElementById(input),
    //$ indica que estas trabajando en una etiqueta HTML
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);
  let jugadoresArray = [];

  /* funcion agregar jugador */
  const agregarJugadores = () => {
    let inputValue = $input.value;

    jugadoresArray.forEach(elem => {
      if (!!inputValue && inputValue === elem) {
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
  };

  /* funcion Mostrar ganador */
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
    let numero = 4;
    const timer = setInterval(() => {
      if (!!UserGandor && !!numero) {
        contador.classList.remove('active');
        /* console.log(numero); */
        numero--;
        num.innerHTML = `((( 0${numero} )))`;
      } else if (!!UserGandor && numero == 0) {
        contador.classList.add('active');
        clearInterval(timer);
        addProduct(UserGandor)
      }
    }, 1000);

    //añadir el ganador a la db
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
            //console.log(idDb)
            let amountDb = result.amount;
            //console.log(amountDb);

            let amountSum = amountDb + 1;
            updateData(idDb, Gandor, amountSum);
            setTimeout(() => {
              modal.classList.add('active');
            }, 4000);

          } else if (!result) {
            let amount = 1;
            winner.innerHTML = `El ganador fue: ${jugadorGanador} `
            modal.classList.remove('active');
            postData(Gandor, amount);
            setTimeout(() => {
              modal.classList.add('active');
            }, 4000);
            /* console.log(jugadoresArray); */
          }
        } else {
          console.log('No hay ganador')
        }
      }

      modalFunction()

      setTimeout(() => {
        $jugadores.innerHTML = "";
      }, 4000);
    };


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

