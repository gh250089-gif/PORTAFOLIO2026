const formulario = document.getElementById("formLogin");



formulario.addEventListener("submit",(e)=>{


    e.preventDefault();



    const usuario =
    document.getElementById("usuario").value.trim();



    const password =
    document.getElementById("password").value.trim();




    if(usuario === "" || password === ""){


        alert("Por favor complete todos los campos.");

        return;


    }




    const loader =
    document.getElementById("loader");



    loader.style.display="flex";





    setTimeout(()=>{


        window.location.href="Dashboard.html";


    },2000);



});






// MOSTRAR / OCULTAR PASSWORD


const togglePassword =
document.getElementById("togglePassword");



const passwordInput =
document.getElementById("password");




togglePassword.addEventListener("click",()=>{


    if(passwordInput.type==="password"){


        passwordInput.type="text";


        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");



    }else{


        passwordInput.type="password";


        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");


    }


});