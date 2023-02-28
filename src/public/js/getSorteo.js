
async function getSorteo() {
  const response = await fetch("/api/winner");
  const data = await response.json();
  console.log(data);


  data.data.forEach(user => {
    /*    console.log(user); */
    const usuario = `<li>name: ${user.name}</li>`;

    /* const winnerList = document.getElementById('winnerList'); */
    const winnerUl = document.getElementById('winnerUl');
    if (user.lengt === 0) {
      winnerUl.innerHTML = 'No hay ganadores para mostrar'
    } else {
      winnerUl.insertAdjacentHTML('beforeend', usuario)
    }
  });

}

getSorteo()


/* window.addEventListener("DOMContentLoaded", navigator, false)
window.addEventListener("hashchange", navigator, false)

function navigator() {
  if (location.hash.startsWith("#trends")) {
    trendsPage()
  }  else {
    homePage()
  }
}

function homePage() {
  console.log("Home!!")
  getTrendingMoviesPreview()
  getCategoriesPreview()
}
function trendsPage() {
  console.log("TRENDS!!")
}
 */




/* platzi curos video 9 */
/* https://platzi.com/clases/2986-api-practico/48454-mostrando-y-ocultando-secciones/ */