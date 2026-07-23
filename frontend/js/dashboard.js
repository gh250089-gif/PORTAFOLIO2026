// ===== ELEMENTOS =====

const contenido = document.getElementById("contenido");


const inicio = document.getElementById("inicio");
const alumnos = document.getElementById("alumnos");
const docentes = document.getElementById("docentes");
const asistencia = document.getElementById("asistencia");
const reportes = document.getElementById("reportes");
const salir = document.getElementById("salir");





// ===== CAMBIAR CONTENIDO =====


function cambiarContenido(titulo,texto){


contenido.innerHTML=`

<h2>${titulo}</h2>

<p>
${texto}
</p>

`;

}





// ===== MENU ACTIVO =====


function activarMenu(elemento){


document.querySelectorAll(".sidebar li")
.forEach(li=>{


li.classList.remove("activo");


});


elemento.classList.add("activo");


}






// ===== INICIO =====


inicio.addEventListener("click",()=>{


activarMenu(inicio);


cambiarContenido(

"Bienvenido al Sistema",

"Seleccione una opción del menú para comenzar."

);


});







// ===== ALUMNOS =====


alumnos.addEventListener("click",()=>{


activarMenu(alumnos);


cambiarContenido(

"Módulo de Alumnos",

"Aquí podrás registrar, editar y eliminar alumnos."

);


});








// ===== DOCENTES =====


docentes.addEventListener("click",()=>{


activarMenu(docentes);


cambiarContenido(

"Módulo de Docentes",

"Aquí podrás administrar los docentes."

);


});







// ===== ASISTENCIA =====


asistencia.addEventListener("click",()=>{


activarMenu(asistencia);


cambiarContenido(

"Asistencia QR",

"Aquí se registrará la asistencia mediante código QR."

);


});








// ===== REPORTES =====


reportes.addEventListener("click",()=>{


activarMenu(reportes);


cambiarContenido(

"Reportes",

"Aquí podrás generar reportes del sistema."

);


});









// ===== CERRAR SESIÓN =====


salir.addEventListener("click",()=>{


const loader =
document.getElementById("loader");



loader.style.display="flex";




setTimeout(()=>{


window.location.href="index.html";


},2000);



});