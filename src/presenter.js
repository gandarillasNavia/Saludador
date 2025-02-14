const nombre= document.querySelector("#nombre");
const form = document.querySelector("#saludo-form");
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreIn = nombre.value.trim(); 
  div.innerHTML = `<p>Hola ${nombreIn}</p>`;
});