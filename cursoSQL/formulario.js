window.onload = function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        var nombre = document.querySelector("input[name='nombre']").value;
        var apellido = document.querySelector("input[name='apellido']").value;
        var email = document.querySelector("input[name='email']").value;

        var nombreApellidoRegex = /^[a-zA-Z0-9]+$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nombreApellidoRegex.test(nombre)) {
            event.preventDefault();
            alert("El nombre solo puede contener letras y números.");
            return;
        }

        if (!nombreApellidoRegex.test(apellido)) {
            event.preventDefault();
            alert("El apellido solo puede contener letras y números.");
            return;
        }

        if (!emailRegex.test(email)) {
            event.preventDefault();
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

       
    });
}

