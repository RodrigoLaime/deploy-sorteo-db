// ##########################################
//funcion para actualizar la base de datos

export async function updateData(id, nombre, amount) {
  /* const apiPatch = 'https://deploy-sorteo-db-production-d3f8.up.railway.app/api/update/' */
  const apiPatch = 'http://localhost:3000/api/update/'
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

// ##########################################

//funcion para agregar a la base de datos
export async function postData(name, repeat) {
  /*   const api = 'https://deploy-sorteo-db-production-d3f8.up.railway.app/api/sorteo' */
  const api = 'http://localhost:3000/api/sorteo'
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
