//Codigo para agregar un Div con un parrafo de texto al div
let divPrincipal = document.getElementById(`ID-div__containerEjemplo1`);
let divNuevo = document.createElement(`div`);
divNuevo.classList.add(`p__parrafoJavascript`);
divNuevo.innerHTML = `<p>Este texto se agregó con JS</p>`;
divPrincipal.appendChild(divNuevo);
//   ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪

//Codigo que agrega animaciones al HTML (opacidadad)
let botonOcultarMotrar = document.getElementById(`ID-button__mostrarOcultar`);
let divMostrarOcultar = document.getElementById(
  `ID-div__preloadContainerAnimacionJS`
);

botonOcultarMotrar.addEventListener(`click`, function () {
  if (divMostrarOcultar.style.opacity == 0) {
    divMostrarOcultar.style.marginBottom = `20px`;
    botonOcultarMotrar.style.backgroundColor = `rgb(3, 255, 3)`;
    botonOcultarMotrar.textContent = `On`;

    setTimeout(() => {
      divMostrarOcultar.style.opacity = 1;
      divMostrarOcultar.style.width = `70%`;
      divMostrarOcultar.style.height = `auto`;
      divMostrarOcultar.style.marginTop = `20px`;
    }, 150);
  } else {
    botonOcultarMotrar.textContent = `OFF`;
    botonOcultarMotrar.style.backgroundColor = `red`;
    divMostrarOcultar.style.opacity = 0;
    divMostrarOcultar.style.width = `30%`;
    setTimeout(() => {
      divMostrarOcultar.style.marginBottom = `-30px`;
    }, 350);
  }
});
//   ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪

//Código que crea un div desde 0 con JS
let divPadreNuevoDiv = document.getElementById(
  `ID-div__containerCreandoAnimaciones`
);
let botonOcultarMostrarNuevoDiv = document.getElementById(
  `ID-button__animarNuevoDivCreadoConJS`
);
let parrafoDivNuevo = document.getElementById(`p__parrafoDivNuevo`);

let nuevoDiv = document.createElement(`div`);
nuevoDiv.classList.add(`div__nuevoDivcreado`, `transitionnuevoDivcreado`);
botonOcultarMostrarNuevoDiv.addEventListener(`click`, function () {
  nuevoDiv.innerHTML = `<p class="p__parrafoDivNuevo transition">Este parrafo se creó con JavaScript desde 0 </p>`;
  if (nuevoDiv.style.opacity == 0) {
    botonOcultarMostrarNuevoDiv.style.backgroundColor = `rgb(3, 255, 3)`
    botonOcultarMostrarNuevoDiv.textContent = `On`
    nuevoDiv.style.backgroundColor = `white`;
    divPadreNuevoDiv.appendChild(nuevoDiv);
    setTimeout(() => {
        nuevoDiv.style.margin = `10px`;
    }, 100);
    setTimeout(() => {
        nuevoDiv.style.width = `90%`;
        nuevoDiv.style.opacity = 1;
    }, 400);
    nuevoDiv.style.zIndex = `1`;
  } else {
      botonOcultarMostrarNuevoDiv.textContent = `OFF`
      botonOcultarMostrarNuevoDiv.style.backgroundColor = `red`
      nuevoDiv.style.width = `45%`;
    nuevoDiv.style.backgroundColor = `rgba(255, 255, 255, 0.311)`;
    nuevoDiv.style.zIndex = `-1`;
    setTimeout(() => {
      // parrafoDivNuevo.style.opacity = 0;
      nuevoDiv.style.margin = `-20px`;
      nuevoDiv.style.opacity = 0;
    }, 500);
  }
});
