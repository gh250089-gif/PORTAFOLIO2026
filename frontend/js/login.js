const formulario = document.getElementById("formLogin");


formulario.addEventListener("submit",(e)=>{


    e.preventDefault();


    const usuario = document.getElementById("usuario").value.trim();

    const password = document.getElementById("password").value.trim();



    if(usuario === "" || password === ""){


        alert("Por favor complete todos los campos.");

        return;


    }



    alert("Bienvenido " + usuario);



    console.log("Usuario:",usuario);

    console.log("Contraseña:",password);



});





// MOSTRAR CONTRASEÑA


const togglePassword = document.getElementById("togglePassword");

const password = document.getElementById("password");



togglePassword.addEventListener("click",()=>{


    if(password.type === "password"){


        password.type="text";


        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");


    }else{


        password.type="password";


        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");


    }


});