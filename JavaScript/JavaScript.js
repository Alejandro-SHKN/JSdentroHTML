//Codigo para agregar un Div con un parrafo de texto al div
let divPrincipal = document.getElementById(`ID-div__containerEjemplo1`);
let divNuevo = document.createElement(`div`);
divNuevo.classList.add(`p__parrafoJavascript`)
divNuevo.innerHTML = `<p>Este texto se agregó con JS</p>`;
divPrincipal.appendChild(divNuevo);
//   ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪  ⚪ 

//Codigo que agrega animaciones al HTML (opacidadad)
let botonOcultarMotrar = document.getElementById(`ID-button__mostrarOcultar`);
let divMostrarOcultar = document.getElementById(`ID-div__preloadContainerAnimacionJS`);

botonOcultarMotrar.addEventListener(`click`, function(){
    if(divMostrarOcultar.style.opacity == 0){
        divMostrarOcultar.style.marginBottom = `20px`;
        setTimeout(() => {
            
            divMostrarOcultar.style.opacity = 1;
            divMostrarOcultar.style.width = `70%`;
            divMostrarOcultar.style.height = `auto`;
            divMostrarOcultar.style.marginTop = `20px`;
            
        }, 30);
        
    } else{
        divMostrarOcultar.style.opacity = 0;
        divMostrarOcultar.style.width = `30%`;
        setTimeout(() => {
            divMostrarOcultar.style.marginBottom = `-30px`;
        }, 30);

    }
})