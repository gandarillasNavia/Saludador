const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#saludo-form");
const div = document.querySelector("#saludo-div");

let fechaActual = new Date();
let horaActual = fechaActual.getHours();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreIn = nombre.value.trim(); 
  const generoIn = genero.value;
  const edadIn = parseInt(edad.value);
  const idiomaIn = idioma.value;

  let hora;
  if (idiomaIn == "espanol"){
    if (horaActual < 12) {
      hora = "Buenos días";
    } else if (horaActual < 18) {
      hora = "Buenas tardes";
    } else {
      hora = "Buenas noches";
    }
  }
  else if (idiomaIn == "ingles"){
    if (horaActual < 12) {
      hora = "Good morning";
    } else if (horaActual < 18) {
      hora = "Good evening";
    } else {
      hora = "Good night";
    }
  }


  let saludoG = "";
  if (idiomaIn == "espanol") {
    if (generoIn == "masculino") {
      saludoG = edadIn > 30 ? "señor" : "jovencito";
    } else if (generoIn == "femenino") {
      saludoG = edadIn > 30 ? "señora" : "jovencita";
    }
  } 
  else {
    if (generoIn == "masculino") {
      saludoG = edadIn > 30 ? "Mr." : "young man";
    } else if (generoIn == "femenino") {
      saludoG = edadIn > 30 ? "Mrs." : "young lady";
    }
  }
    
  div.innerHTML = `<p>${hora} ${saludoG} ${nombreIn}</p>`;
});