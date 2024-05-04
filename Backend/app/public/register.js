// Obtenemos el formulario de registro por su ID y añadimos un manejador de eventos para el evento 'submit'
document.getElementById("register-form").addEventListener("submit", async (e) => {
    // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();

    // Realizamos una petición POST a la API de registro
    const res = await fetch("http://localhost:4000/api/register", {
        method:"POST",
        headers: {
            // Indicamos que el contenido de la petición es JSON
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // Obtenemos los valores de los campos del formulario
            name: e.target.elements.name.value,
            lastname: e.target.elements.lastname.value,
            email: e.target.elements.email.value,
            birthdate: e.target.elements.birthdate.value,
            CodigoPostal: e.target.elements.CodigoPostal.value,
            phone: e.target.elements.phone.value,
            role: e.target.elements.role.value, // Aquí obtenemos el valor del dropdown
            password: e.target.elements.password.value,
        })
    });

    // Si la respuesta de la API no es exitosa, mostramos un mensaje de error
    if(!res.ok) return mensajeError.classList.toggle("escondido", false);

    // Convertimos la respuesta de la API a JSON
    const resJson = await res.json();

    // Si la respuesta de la API incluye una redirección, redirigimos al usuario a esa página
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
})