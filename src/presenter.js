const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const form = document.querySelector("#saludo-form");
const div = document.querySelector("#saludo-div");

let fechaActual = new Date();
let horaActual = fechaActual.getHours();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreIn = nombre.value.trim(); 
  const generoIn = genero.value;
  let hora;

  if (horaActual < 12) {
    hora = "Buenos días";
  } else if (horaActual < 18) {
    hora = "Buenas tardes";
  } else {
    hora = "Buenas noches";
  }

  let saludoG = "";

  if (generoIn === "masculino") {
     saludoG = "señor";
  } else if (generoIn === "femenino") {
     saludoG = "señora";
  }
  div.innerHTML = `<p>${hora} ${saludoG} ${nombreIn}</p>`;
});