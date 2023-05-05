//Codigo para agregar un Div con un parrafo de texto al div
let divPrincipal = document.getElementById(`ID-div__containerEjemplo1`);
let divNuevo = document.createElement(`div`);
divNuevo.classList.add(`p__parrafoJavascript`)
divNuevo.innerHTML = `<p>Este texto se agregó con JS</p>`;
divPrincipal.appendChild(divNuevo);
//   ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪ 

//Codigo que agrega animaciones al HTML (opacidadad)