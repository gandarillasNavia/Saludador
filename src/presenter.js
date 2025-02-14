const nombre= document.querySelector("#nombre");
const form = document.querySelector("#saludo-form");
const div = document.querySelector("#saludo-div");

let fechaActual = new Date();
let horaActual = fechaActual.getHours();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreIn = nombre.value.trim(); 
  let hora;

  if (horaActual < 12) {
    hora = "Buenos días";
  } else if (horaActual < 18) {
    hora = "Buenas tardes";
  } else {
    hora = "Buenas noches";
  }
  div.innerHTML = `<p>${hora} ${nombreIn}</p>`;
});