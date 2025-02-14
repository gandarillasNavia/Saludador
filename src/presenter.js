const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#saludo-form");
const div = document.querySelector("#saludo-div");

let fechaActual = new Date();
let horaActual = fechaActual.getHours();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreIn = nombre.value.trim(); 
  const generoIn = genero.value;
  const edadIn = parseInt(edad.value);

  let hora;
  if (horaActual < 12) {
    hora = "Buenos días";
  } else if (horaActual < 18) {
    hora = "Buenas tardes";
  } else {
    hora = "Buenas noches";
  }

  let saludoG = "";
  if (generoIn === "masculino") 
  {
    if(edadIn > 30)
    {
      saludoG = "señor";
    }
    else
    {
      saludoG = "joven";
    }  
  } 
  else if (generoIn === "femenino") 
  {
    if(edadIn > 30)
      {
        saludoG = "señora";
      }
      else
      {
        saludoG = "joven";
      }  
  }

  div.innerHTML = `<p>${hora} ${saludoG} ${nombreIn}</p>`;
});